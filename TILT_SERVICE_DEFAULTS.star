# =============================================================================
# TILT_SERVICE_DEFAULTS.star - TDK Enterprise ERP System Defaults
# =============================================================================

BASE_PORT_FRONTEND = 3000
BASE_PORT_BACKEND = 4000
BASE_PORT_WORKER = 5000

HEALTH_CHECK_PATH = "/health"
HEALTH_CHECK_PATH_LIVE = "/health/live"
HEALTH_CHECK_PATH_READY = "/health/ready"
HEALTH_CHECK_INTERVAL = 10
HEALTH_CHECK_TIMEOUT = 5
HEALTH_CHECK_RETRIES = 3

MEMORY_LIMITS = {
    "frontend": 512,
    "backend": 1024,
    "worker": 768,
    "infra": 256,
    "database": 2048,
}

DOCKER_BASE_IMAGES = {
    "bun": "oven/bun:1.2",
    "node": "node:20-alpine",
    "nginx": "nginx:alpine",
    "postgres": "postgres:16-alpine",
    "redis": "redis:7-alpine",
}

NETWORK_PREFIX = "tdk-erp"

exports = {
    "BASE_PORT_FRONTEND": BASE_PORT_FRONTEND,
    "BASE_PORT_BACKEND": BASE_PORT_BACKEND,
    "BASE_PORT_WORKER": BASE_PORT_WORKER,
    "HEALTH_CHECK_PATH": HEALTH_CHECK_PATH,
    "HEALTH_CHECK_PATH_LIVE": HEALTH_CHECK_PATH_LIVE,
    "HEALTH_CHECK_PATH_READY": HEALTH_CHECK_PATH_READY,
    "HEALTH_CHECK_INTERVAL": HEALTH_CHECK_INTERVAL,
    "HEALTH_CHECK_TIMEOUT": HEALTH_CHECK_TIMEOUT,
    "HEALTH_CHECK_RETRIES": HEALTH_CHECK_RETRIES,
    "MEMORY_LIMITS": MEMORY_LIMITS,
    "DOCKER_BASE_IMAGES": DOCKER_BASE_IMAGES,
    "NETWORK_PREFIX": NETWORK_PREFIX,
}
