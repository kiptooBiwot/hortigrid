import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', {
  state: () => ({
    menuItems: [
      { title: 'Home', url: '/', type: 'link' },
      { title: 'About Us', url: '/', type: 'link' },
      {
        title: 'Services',
        url: '/services',
        type: 'dropdown',
        isOpen: false,
        children: [
          { title: 'First', url: '/first' },
          { title: 'Second', url: '/second' },
          { title: 'Third', url: '/Third' },
          { title: 'Fourth', url: '/Fourth' },
          { title: 'Fifth', url: '/Fifth' },
        ],
      },
      { title: 'Portfolio', url: '/', type: 'link' },
      { title: 'News', url: '/', type: 'link' },
      { title: 'Contact', url: '/', type: 'link' },
    ],
    projects: [
      {
        projectName: 'Coffee Irrigation ',
        client: 'Chebitrir Farms, Jacks Farm,Philip’s Farm',
        scopeOfWork:
          'Installation and maintenance of irrigation systems on Coffee plantation ',
        county: 'Kericho',
        year: '2023',
        imageUrl: '/images/about/coffee.jpg',
        projectUrl: ''
      },
      {
        projectName: 'Agri Job for Youth',
        client: 'GIZ',
        scopeOfWork:
          'Business Development Services, Training and Extension Service Provision in Passion Fruit Value Chain',
        county: 'Bungoma, Kakamega,Siaya,Kisumu',
        year: '2022',
        imageUrl: '/images/about/youth-jobs.jpg',
        projectUrl: ''
      },
      {
        projectName: 'Mvua Pap!',
        client: 'Untapped Inc.',
        scopeOfWork:
          'Development of a business and sales model for a solar powered water pump for irrigation and domestic use',
        county: 'Nairobi',
        year: '2020',
        imageUrl: '/images/about/mvua-pap.jpg',
        projectUrl: ''
      },
      {
        projectName: 'Run for Food',
        client: 'Runners’ Heal',
        scopeOfWork:
          'Setting up a fully irrigated school farm for domestic food consumption',
        county: 'Egeiyo Marakwet',
        year: '2018',
        imageUrl: '/images/about/running.jpg',
        projectUrl: ''
      },
      {
        projectName: 'Future Coffee Farmers',
        client: 'Gente Del Futuro',
        scopeOfWork:
          'Development of coffee production curricula for young coffee farmers ',
        county: 'Kilimanjaro Region – Tanzania',
        year: '2018',
        imageUrl: '/images/about/future-farmers.jpg',
        projectUrl: ''
      },
      {
        projectName: 'Kijana na Acre',
        client: 'Uasin Gishu County',
        scopeOfWork:
          'Construction of post-harvest units for horticultural produce',
        county: 'Uasin Gishu',
        year: '2014',
        imageUrl: '/images/about/land.jpg',
        projectUrl: ''
      },
      {
        projectName: 'Mama na 1/8th',
        client: 'Work Her Dream Organisation',
        scopeOfWork:
          'Training and extension service provision for Indigenous vegetable farmers for a contracted market',
        county: 'Uasin Gishu',
        year: '2018',
        imageUrl: '/images/about/women.jpg',
        projectUrl: ''
      },
      {
        projectName: 'Potato project',
        client: 'Kapsengwet Farm ',
        scopeOfWork:
          'Production planning, irrigation systems setup, crop establishment, and management for a large-scale potato farm',
        county: 'Uasin Gishu',
        year: '2018',
        imageUrl: '/images/about/potatoes.jpg',
        projectUrl: ''
      },
      {
        projectName: 'Occupational Safety for IPM',
        client: 'Kailey’s Consortium',
        scopeOfWork:
          'Capacity building of fruit and vegetable farm workers through IPM training ',
        county: 'Nakuru, Kajiado, Kiambu, Nakuru',
        year: '2016',
        imageUrl: '/images/about/safety.jpg',
        projectUrl: ''
      },
      {
        projectName: 'Project Nurture ',
        client: 'Technoserve Inc.',
        scopeOfWork:
          'Set up of controlled environments; passion fruit seedling nurseries for the project',
        county: 'Uasin Gishu',
        year: '2015',
        imageUrl: '/images/about/passion-fruit.jpg',
        projectUrl: ''
      },
    ],
  }),
})
