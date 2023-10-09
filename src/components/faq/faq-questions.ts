
export const estateMgt = [
    {
        id: 1,
        question: 'What is the Estate Management Software used for?',
        answer: "Feels like a close, it's coming toFuck am I gonna do? It's too late to start overThis is the only thing I, thing I knowSometimes I feel like all I ever do is Find different ways to word the same, old song Ever since I came alongFrom the day the song called Hi! My Name Is droppedStarted thinking my name was fault'Cause anytime things went wrong I was the one who they would blame it onThemedia made me the equivalent of a modern-day Genghis Khan",
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