declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const trackApiErrorToGA = (errorData: {
    path: string
    method: string
    statusCode?: number
    message: string
  }) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "api_error", {
        event_category: "API",
        event_label: `${errorData.method} ${errorData.path}`,
        value: errorData.statusCode || 0,
        message: errorData.message,
      })
    } else {
      console.warn("Google Analytics not initialized")
    }
  }
  