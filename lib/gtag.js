import DB from "../data/siteData.preval";
export const GA_MEASUREMENT_ID = DB.siteData?.GOOGLE_MEASUREMENT_ID;

export const pageview = () => {
  if (GA_MEASUREMENT_ID) {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

export const event = ({ action, category, label, value }) => {
  if (GA_MEASUREMENT_ID) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
};
