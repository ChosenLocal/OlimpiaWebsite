# Analytics & Events

**Primary conversions**
- `emergency_call_click` (label: page, position)
- `call_me_now_request` (props: page, service, zip?)
- `chat_start`, `chat_to_call`, `chat_end`
- `lead_submit` (props: service)
- `resource_download`

**Implementation**
- Use Plausible or PostHog via server-side event proxy to keep JS light.
- Tag GBP link with UTM: `?utm_source=google&utm_medium=gbp&utm_campaign=profile`.
- Dynamic Number Insertion (DNI) if running ads; default static number otherwise.
