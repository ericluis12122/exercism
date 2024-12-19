public class LogLine {
    private final LogLevel logLevel;
    private final String message;
    
    public LogLine(String logLine) {
        String[] arreglo = logLine.split("]: ");
        message = arreglo[1];
        switch (arreglo[0]) {
            case "[TRC":
                logLevel = LogLevel.TRACE;
                break;
            case "[DBG":
                logLevel = LogLevel.DEBUG;
                break;
            case "[INF":
                logLevel = LogLevel.INFO;
                break;
            case "[WRN":
                logLevel = LogLevel.WARNING;
                break;
            case "[ERR":
                logLevel = LogLevel.ERROR;
                break;
            case "[FTL":
                logLevel = LogLevel.FATAL;
                break;
            default:
                logLevel = LogLevel.UNKNOWN;
        }
    }

    public LogLevel getLogLevel() {
        return logLevel;
    }

    public String getOutputForShortLog() {
        return logLevel.getLogLevelNumber() + ":" + message;
    }
}
