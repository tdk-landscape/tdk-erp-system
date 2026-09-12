# =============================================================================
# TILT_TECH_STACK.star - TDK Enterprise ERP System Tech Stack
# =============================================================================

TECH_STACK = {
    "backend": {
        "runtime": "bun",
        "framework": "hono",
        "version": "4.0",
        "language": "typescript",
    },
    "frontend": {
        "runtime": "bun",
        "framework": "vite",
        "version": "5.0",
        "ui": "react",
        "version_ui": "18.0",
    },
    "worker": {
        "runtime": "bun",
        "framework": "worker",
        "version": "1.2",
    },
    "database": {
        "primary": "postgresql",
        "version": "16",
        "cache": "redis",
        "version_cache": "7",
    },
    "messaging": {
        "broker": "nats",
        "version": "2.10",
    },
}

exports = {
    "TECH_STACK": TECH_STACK,
}
