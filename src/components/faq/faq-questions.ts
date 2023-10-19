
export const estateMgt = [
    {
        id: 1,
        question: 'How can Estility help my gated community or residential estate',
        answer: "The Estility app is designed to simplify your life in multiple ways. It ensures your dues are paid on time, relieves the stress of grocery and cooking gas purchasing, facilitates seamless visitor access, and efficiently manages and tracks collections. It's an all-in-one solution to enhance your experience within your gated community or estate."
    },

    {
        id: 2,
        question: 'How can I request a demo or get started with Estility?',
        answer: 'You can click the "Schedule a Demo" link on our website or send us an email at support@estility.co to request a demonstration. (Email to be set up)',
    },

    {
        id: 3,
        question: "Is Estility's software easy to use?",
        answer: "Yes, the Estate app is designed for user-friendliness. After your estate or gated community signs up, all that's required is to download the app from your respective app store, either Play Store for Android or the IOS store for Apple devices, and then sign in using your registered email address. It's a straightforward process to get started with the app."
    },

    {
        id: 4,
        question: "What are the key features of Estility's software?",
        answer: "Estility offers a software solution that encompasses both a Resident User App and an Estate Management App. The Resident User App empowers residents by enabling them to perform various tasks, including making payments for dues and utility bills, requesting access codes, ordering groceries and cooking gas from vendors, engaging with Estility's Support team, and leaving messages for estate management. On the other hand, the Estate Management App caters to estate and facility managers, providing them with tools to efficiently manage their communities. This includes functionalities such as onboarding new residents, monitoring due collections, and effectively managing various aspects of the community. Additionally, the software includes a robust security management system that facilitates the check-in and check-out process for visitors using access codes, ensuring enhanced security measures and more streamlined operations.",
    },

    {
        id: 5,
        question: "Can I customize Estility's software to fit my community's specific needs?",
        answer: "Yes, our app can be customized to align with your specific requirements. For detailed information on customization options, please reach out to our customer support team. They will be happy to assist you further and provide guidance on tailoring the app to your specific needs."
    },

    {
        id: 6,
        question: "Is Estility's software secure and reliable?",
        answer: "Absolutely, we take security and reliability seriously. We have implemented comprehensive measures to ensure the utmost security and protection of our residents' details. Your data privacy and safety are our top priorities."
    },

    {
        id: 7,
        question: "What is the pricing structure for Estility's services?",
        answer: "We take pride in offering a straightforward and affordable pricing structure, ensuring ease and accessibility for our customers."
    },

    {
        id: 8,
        question: "What types of payment methods are accepted for dues and services?",
        answer: "Estility offers a convenient wallet system within the Estate App. This allows for all payments and dues collections to be efficiently managed and processed within the app, providing a seamless financial experience for both residents and estate management."
    },

    {
        id: 9,
        question: "Provide information on the onboarding process for communities interested in using the software.",
        answer: "Estate managements will be contacted and guided through the onboarding process. We're here to assist and ensure a smooth transition to using our services."
    },

    {
        id: 10,
        question: "What should I do if I encounter technical issues with the software?",
        answer: "If you encounter any issues, please don't hesitate to contact us at support@estility.co. Simply provide us with the details of the issue, and we will work diligently to resolve it promptly. Your satisfaction is our priority."
    }
]

export const estateSecurity = [
    {
        id: 1,
        question: 'What is the Estate Security Software used for?',
        answer: 'i dont know',
    },

    {
        id: 2,
        question: 'Can I access property and resident information through the software?',
        answer: 'Yes',
    },

    {
        id: 3,
        question: 'Does the software support different estate sizes?',
        answer: 'YES'
    },

    {
        id: 4,
        question: 'Can I access property and resident information through the software?',
        answer: 'Yes',
    },

    {
        id: 5,
        question: 'Does the software support different estate sizes?',
        answer: 'YES'
    }
]

export const residentApp = [
    {
        id: 1,
        question: 'What is the Estate Resident used for?',
        answer: 'i dont know',
    },

    {
        id: 2,
        question: 'Can I access property and resident information through the software?',
        answer: 'Yes',
    },

    {
        id: 3,
        question: 'Does the software support different estate sizes?',
        answer: 'YES'
    },

    {
        id: 4,
        question: 'Can I access property and resident information through the software?',
        answer: 'Yes',
    },

    {
        id: 5,
        question: 'Does the software support different estate sizes?',
        answer: 'YES'
    }
]

export const partners = [
    {
        id: 1,
        question: 'What is the Estate Partners Software used for?',
        answer: 'i dont know',
    },

    {
        id: 2,
        question: 'Can I access property and resident information through the software?',
        answer: 'Yes',
    },

    {
        id: 3,
        question: 'Does the software support different estate sizes?',
        answer: 'YES'
    },

    {
        id: 4,
        question: 'Can I access property and resident information through the software?',
        answer: 'Yes',
    },

    {
        id: 5,
        question: 'Does the software support different estate sizes?',
        answer: 'YES'
    }
]

export const faqTopics = [
    {
        id: 1,
        title: 'Estate Management',
    },

    {
        id: 2,
        title: 'Estate Security',
    },

    {
        id: 3,
        title: 'Resident App',
    },

    {
        id: 4,
        title: 'Partners',
    },
]

// concat all the arrays into one array
export const allQuestions = [
    ...estateMgt.map((item) => ({ ...item, id: `estateMgt_${item.id}` })),
    ...estateSecurity.map((item) => ({ ...item, id: `estateSecurity_${item.id}` })),
    ...residentApp.map((item) => ({ ...item, id: `residentApp_${item.id}` })),
    ...partners.map((item) => ({ ...item, id: `partners_${item.id}` })),
  ];
// export const allQuestions = estateMgt.concat(estateSecurity, residentApp, partners);