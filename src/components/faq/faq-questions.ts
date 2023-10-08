
export const estateMgt = [
    {
        id: 1,
        question: 'What is the Estate Management Software used for?',
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