import json

from odoo import http
from odoo.http import request

# Origin of the public website allowed to post leads. Adjust if the
# site is served from a different domain.
ALLOWED_ORIGIN = "https://maprimaq.com"


class MaprimaqContactController(http.Controller):
    @http.route(
        "/maprimaq/contact",
        type="http",
        auth="public",
        methods=["POST", "OPTIONS"],
        csrf=False,
        cors=ALLOWED_ORIGIN,
    )
    def contact(self, **kwargs):
        if request.httprequest.method == "OPTIONS":
            return request.make_response("", status=204)

        try:
            data = json.loads(request.httprequest.get_data(as_text=True) or "{}")
        except json.JSONDecodeError:
            return request.make_response(
                json.dumps({"error": "invalid json"}),
                status=400,
                headers=[("Content-Type", "application/json")],
            )

        name = (data.get("name") or "").strip()
        email = (data.get("email") or "").strip()
        message = (data.get("message") or "").strip()
        if not name or not email or not message:
            return request.make_response(
                json.dumps({"error": "missing required fields"}),
                status=400,
                headers=[("Content-Type", "application/json")],
            )

        request.env["crm.lead"].sudo().create(
            {
                "name": "Web: %s%s" % (name, " (%s)" % data.get("company") if data.get("company") else ""),
                "contact_name": name[:128],
                "email_from": email[:128],
                "phone": (data.get("phone") or "")[:64],
                "partner_name": (data.get("company") or "")[:128],
                "description": message[:4000],
                "type": "lead",
            }
        )
        return request.make_response(
            json.dumps({"ok": True}),
            headers=[("Content-Type", "application/json")],
        )
