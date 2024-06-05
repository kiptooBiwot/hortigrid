import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', {
  state: () => ({
    menuItems: [
      { title: 'Home', url: '/', type: 'link' },
      { title: 'About Us', url: '/about-us', type: 'link' },
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
      { title: 'Portfolio', url: '/portfolio', type: 'link' },
      // { title: 'News', url: '/', type: 'link' },
      { title: 'Contact', url: '/contact-us', type: 'link' },
    ],
    services: [
      {
        title: 'Enterprise Modelling',
        icon: 'fluent:clipboard-settings-24-regular',
        description:
          'We tailor our services to help you boost productivity, profits, and sustainability on your farm and with our expertise and personalized guidance',
        url: '/services/enterprise-modelling',
        imageUrl: '/images/services/enterprise-modelling.jpg'
      },
      {
        title: 'Planting material',
        icon: 'icon-park-outline:hold-seeds',
        description:
          'With our expertise in both production and sourcing, we provide reliable planting material, specializing in fruit seedlings such as passion fruit, pomegranates, tamarillo, citrus, and apples. ',
        url: '/services/planting-material',
        imageUrl: '/images/services/planting-materials.jpg'
      },
      {
        title: 'Production Management',
        icon: 'streamline:money-graph-bar-increase-up-product-performance-increase-arrow-graph-business-chart',
        description:
          'Our crop enterprise management services are customized and designed to optimize operations and ease the burden of resource, inputs, and labor management. ',
        url: '/services/production-management',
        imageUrl: '/images/services/production-management.jpg'
      },
      {
        title: 'Agronomic support',
        icon: 'streamline:interface-help-customer-support-2-customer-headphones-headset-help-microphone-phone-person-support',
        description:
          'As your trusted partners in growth, our expert agronomic support is dedicated to ensuring crop production success through ecosystem tailored and personalized production guidance to address your farm specific challenges and goals. ',
        url: '/services/agronomic-support',
        imageUrl: '/images/services/agronomic-support.jpg'
      },
      {
        title: 'Extension and Demonstration',
        icon: 'mdi:account-supervisor',
        description:
          'Through horticultural demonstration and extension, we provide a learning lab for our team and allow us to bring tried and tested expertise directly to your farm, offering practical knowledge and innovative techniques to help you thrive.',
        url: '/services/extension-and-demonstration',
        imageUrl: '/images/services/extension.jpg'
      },
      {
        title: 'Capacity Building',
        icon: 'streamline:global-learning',
        description:
          'Through our horticultural farm manager training and capacity building services, we provide tailored programs designed to equip you with the skills, confidence, and expertise needed to sustainably run a horticultural production enterprise.',
        url: '/services/capacity-building',
        imageUrl: '/images/services/capacity-building.jpg'
      },
      {
        title: 'Farm Infrastructure Customisation',
        icon: 'ph:farm',
        description:
          'Our customized irrigation and controlled environment solutions tailored for different crops empower your farm with precision agriculture, focusing on optimizing water management and enhancing crop performance.',
        url: '/services/farm-infrastructure-customisation',
        imageUrl: '/images/services/farm-infrastructure.jpg'
      },
      {
        title: 'Market linkage',
        icon: 'solar:hand-money-linear',
        description:
          'Drawing on our expertise in sustainable production management, our horticultural market readiness and linkage services expertly connect your farm to both niche and global markets. ',
        url: '/services/market-linkage',
        imageUrl: '/images/services/market-linkage.jpg'
      },
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
        projectUrl: 'coffee-irrigation'
      },
      {
        projectName: 'Agri Jobs for Youth',
        client: 'GIZ',
        scopeOfWork:
          'Business Development Services, Training and Extension Service Provision in Passion Fruit Value Chain',
        county: 'Bungoma, Kakamega,Siaya,Kisumu',
        year: '2022',
        imageUrl: '/images/about/youth-jobs.jpg',
        projectUrl: 'agri-jobs-for-youth'
      },
      {
        projectName: 'Mvua Pap!',
        client: 'Untapped Inc.',
        scopeOfWork:
          'Development of a business and sales model for a solar powered water pump for irrigation and domestic use',
        county: 'Nairobi',
        year: '2020',
        imageUrl: '/images/about/mvua-pap.jpg',
        projectUrl: 'mvua-pap'
      },
      {
        projectName: 'Run for Food',
        client: 'Runners’ Heal',
        scopeOfWork:
          'Setting up a fully irrigated school farm for domestic food consumption',
        county: 'Egeiyo Marakwet',
        year: '2018',
        imageUrl: '/images/about/running.jpg',
        projectUrl: 'run-for-food'
      },
      {
        projectName: 'Future Coffee Farmers',
        client: 'Gente Del Futuro',
        scopeOfWork:
          'Development of coffee production curricula for young coffee farmers ',
        county: 'Kilimanjaro Region – Tanzania',
        year: '2018',
        imageUrl: '/images/about/future-farmers.jpg',
        projectUrl: 'future-coffee-farmers'
      },
      {
        projectName: 'Kijana na Acre',
        client: 'Uasin Gishu County',
        scopeOfWork:
          'Construction of post-harvest units for horticultural produce',
        county: 'Uasin Gishu',
        year: '2014',
        imageUrl: '/images/about/land.jpg',
        projectUrl: 'kijana-na-acre'
      },
      {
        projectName: 'Mama na 1/8th',
        client: 'Work Her Dream Organisation',
        scopeOfWork:
          'Training and extension service provision for Indigenous vegetable farmers for a contracted market',
        county: 'Uasin Gishu',
        year: '2018',
        imageUrl: '/images/about/women.jpg',
        projectUrl: 'mama-na-one-eighth'
      },
      {
        projectName: 'Potato project',
        client: 'Kapsengwet Farm ',
        scopeOfWork:
          'Production planning, irrigation systems setup, crop establishment, and management for a large-scale potato farm',
        county: 'Uasin Gishu',
        year: '2018',
        imageUrl: '/images/about/potatoes.jpg',
        projectUrl: 'potato-project'
      },
      {
        projectName: 'Occupational Safety for IPM',
        client: 'Kailey’s Consortium',
        scopeOfWork:
          'Capacity building of fruit and vegetable farm workers through IPM training ',
        county: 'Nakuru, Kajiado, Kiambu, Nakuru',
        year: '2016',
        imageUrl: '/images/about/safety.jpg',
        projectUrl: 'occupational-safety-for-IPM'
      },
      {
        projectName: 'Project Nurture ',
        client: 'Technoserve Inc.',
        scopeOfWork:
          'Set up of controlled environments; passion fruit seedling nurseries for the project',
        county: 'Uasin Gishu',
        year: '2015',
        imageUrl: '/images/about/passion-fruit.jpg',
        projectUrl: 'project-nurture'
      },
    ],
  }),
})
