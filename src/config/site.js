export const site = {
  name: 'Hipco',
  // Internal links that have no page in this app fall back to this origin.
  legacyOrigin: 'https://www.montraelectric.com',
  brochure: {
    endpoint: 'https://www.montraelectric.com/mdataapi/post/download-brouchure',
    phoneCountryCode: '+91',
  },
  address: {
    lines: ['BNJ Tower, Tripureshwor', 'Kathmandu, Nepal'],
    mapQuery: 'BNJ Tower, Tripureshwor, Kathmandu, Nepal',
  },
  contact: [
    { label: 'Customer care', text: '+977 971-7101010', href: 'tel:+9779717101010', primary: true },
    { label: 'Sales', text: '+977 985-1407701', href: 'tel:+9779851407701' },
    { label: 'Mail', text: 'customercare@hipco.com.np', href: 'mailto:customercare@hipco.com.np' },
    { label: 'Inquiry', text: 'info@hipco.com.np', href: 'mailto:info@hipco.com.np' },
  ],
  social: {
    facebook: 'https://www.facebook.com/montra.nepal1/',
    instagram: 'https://www.instagram.com/montra.nepal',
    x: 'https://x.com/MontraElectric',
    linkedin: 'https://www.linkedin.com/company/montraelectric',
    youtube: 'https://www.youtube.com/@montraelectriclastmile',
    whatsapp:
      'https://api.whatsapp.com/send?phone=919240298953&text=Hi,%20I%27m%20interested%20in%20more%20information%20about%20montra%20commercial%20vehicles.',
  },
  whatsappChat:
    'https://api.whatsapp.com/send/?phone=9240298953&text=Hi%2C+I%27m+interested+in+more+information+about+Montra+Electric+Commercial+Vehicles.&type=phone_number&app_absent=0',
  features: {
    chatWidget: true,
    analytics: true,
  },
  chat: {
    scriptSrc: 'https://chat.ccaasv2.ozonetel.com/chatWidget.js',
    config: {
      widgetConfig: {
        headerLogo: 'https://s3.ap-south-1.amazonaws.com/ca.chat/images/f34e4afb3f757aaa6a7d7819b49bb2f2.png',
        showAgentAvatar: true,
        subtitle: '',
        showHeaderLogo: true,
        title: 'Montra Electric',
      },
      launcher: { welcomeMessage: null, text: 'Need Help? Chat with Us', type: 'icon' },
      theme: {
        appHeader: { backgroundColor: '#FFFFFF', textColor: '#2F324A' },
        conversation: {
          bot: { backgroundColor: '#FFFFFF', textColor: '#2F324A' },
          interactiveButton: { backgroundColor: 'rgba(59, 141, 247, 1)', textColor: '#000F00' },
          body: '#F1F2F9',
          user: { backgroundColor: 'rgba(59, 141, 247, 1)', textColor: '#FFFFFF' },
        },
        primary: 'rgba(59, 141, 247, 1)',
      },
      userDetails: { name: '', phone_number: '', id: '', email: '' },
      additionalData: {},
      disableAttachment: false,
      clientInfo: { API_KEY: 'KK1574b1b4d2592426c231f4ccd374e83e', DID: '919240217138' },
    },
  },
  analytics: {
    linkedInPartnerId: '9646980',
    clarityId: 'ffq6dghtt7',
    facebookPixelIds: ['1545575609491971', '685625199606186'],
  },
};
