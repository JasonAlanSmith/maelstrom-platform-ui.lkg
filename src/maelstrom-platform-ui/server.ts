// Import the datadog apm tracing lib
const datadogTracer = require("dd-trace").init({analytics: true});// Import the express-opentracing lib
const OpenTracingMiddleware = require("express-opentracing").default;
