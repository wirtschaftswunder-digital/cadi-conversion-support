# CADI Conversion Source Tracker

This JavaScript script automatically stores specified URL parameters as cookies in the user's browser. It is designed for tracking conversion-related parameters such as `gclid` (Google Click ID) and `cadi_source` over a specified duration.

## Features
- Automatically captures and stores specified URL parameters as cookies.
- Supports configurable expiration duration (default: 7 days).
- Uses a prefix (`ccs_`) for stored cookies to prevent conflicts.
- Works on page load without requiring additional setup.
