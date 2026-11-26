import azureImg from '../assets/images/certificates/azure.png'
import msAzureBadge from '../assets/images/certificates/ms-azure-associate.svg'
import udemyCert from '../assets/images/certificates/udemy-ai.jpg'
import courseraCert from '../assets/images/certificates/coursera-bert.jpg'
import skillsoftPythonDs from '../assets/images/certificates/skillsoft-python-ds.svg'
import skillsoftAzureCloud from '../assets/images/certificates/skillsoft-azure-cloud.svg'
import skillsoftGnn from '../assets/images/certificates/skillsoft-gnn-embed.png'
import skillsoftGnnBadge from '../assets/images/certificates/skillsoft-gnn-badge.png'
import skillsoftSql from '../assets/images/certificates/skillsoft-sql-data.svg'
import skillsoftPythonAdv from '../assets/images/certificates/skillsoft-python-adv.svg'

export const certificates = [
  {
    title: 'Microsoft Certified: Azure Developer Associate',
    issuer: 'Microsoft',
    year: '2026',
    date: 'October 2026',
    credentialId: 'C527C91BF680E08A',
    credential: 'https://learn.microsoft.com/en-us/users/abrhamgebremedhin-1153/credentials/c527c91bf680e08a',
    category: 'Cloud & AI',
    relevance: 'Designing, building, testing, and maintaining cloud applications and services on Microsoft Azure (AZ-204)',
    image: azureImg,
    badge: msAzureBadge,
  },
  {
    title: 'Artificial Intelligence Journey: Beginner to Pro',
    issuer: 'Udemy',
    year: '2026',
    date: 'October 2026',
    credentialId: 'UC-96b12e8f-69b0-4b08-ba55-0764a169786c',
    credential: 'https://ude.my/UC-96b12e8f-69b0-4b08-ba55-0764a169786c',
    category: 'AI Engineering',
    relevance: 'End-to-end artificial intelligence foundations, applied ML workflows, and modern AI model development',
    image: udemyCert,
  },
  {
    title: 'Fine Tune BERT for Text Classification with TensorFlow',
    issuer: 'Coursera',
    year: '2026',
    date: 'October 2026',
    credentialId: 'Q9JDLI5H429T',
    credential: 'https://coursera.org/share/51e75bb0eae9e6035b7b3d71117610b9',
    category: 'NLP & Deep Learning',
    relevance: 'Transformer architecture fine-tuning, tokenization, and deep learning text classification pipelines with TensorFlow',
    image: courseraCert,
  },
  {
    title: 'Python for Data Science & AI',
    issuer: 'Skillsoft',
    year: '2025',
    date: 'March 2025',
    credential: 'https://skillsoft.digitalbadges-eu.skillsoft.com/profile/eu-abrsh067647217/wallet',
    category: 'AI/ML',
    relevance: 'Core AI engineering foundation -NumPy, Pandas, and scikit-learn',
    image: skillsoftPythonDs,
  },
  {
    title: 'Graph Neural Networks',
    issuer: 'Skillsoft',
    year: '2025',
    date: 'April 2025',
    credential: 'https://skillsoft.digitalbadges-eu.skillsoft.com/5c172409-3a5e-421d-b548-99ba6c6d9572#acc.Nz3MGakR',
    category: 'GNNs',
    relevance: 'Graph representation learning and relational neural network architectures',
    image: skillsoftGnn,
    badge: skillsoftGnnBadge,
  },
  {
    title: 'SQL for Data Engineering',
    issuer: 'Skillsoft',
    year: '2025',
    date: 'December 2025',
    credential: 'https://skillsoft.digitalbadges-eu.skillsoft.com/profile/eu-abrsh067647217/wallet',
    category: 'Data',
    relevance: 'Intelligent data architecture, relational modeling, and query optimization',
    image: skillsoftSql,
  },
  {
    title: 'Advanced Python Programming',
    issuer: 'Skillsoft',
    year: '2024',
    date: 'November 2024',
    credential: 'https://skillsoft.digitalbadges-eu.skillsoft.com/profile/eu-abrsh067647217/wallet',
    category: 'Backend',
    relevance: 'Advanced Python design patterns, async programming, and runtime performance',
    image: skillsoftPythonAdv,
  },
]
