import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', {
  state: () => ({
    menuItems: [
      { title: 'Home', url: '/', type: 'link' },
      { title: 'About Us', url: '/about-us', type: 'link' },
      {
        title: 'Services',
        url: '/services',
        type: 'link',
        isOpen: false,
        children: [
          { title: 'First', url: '/first' },
          { title: 'Second', url: '/second' },
          { title: 'Third', url: '/Third' },
          { title: 'Fourth', url: '/Fourth' },
          { title: 'Fifth', url: '/Fifth' },
        ],
      },
      {
        title: 'Products',
        url: '/products',
        isOpen: false,
        type: 'dropdown',
        children: [
          { title: 'Lima Smart', url: '/products/lima-smart' },
          { title: 'Plateau Greens', url: '/products/plateau-greens' },
          { title: 'Agritude Academy', url: '/products/agritude-academy' },
          { title: 'Production Support Services', url: '/products/production-support-services' },
        ]
      },
      { title: 'Portfolio', url: '/portfolio', type: 'link' },
      // { title: 'News', url: '/', type: 'link' },
      { title: 'Contact', url: '/contact-us', type: 'link' },
    ],
    heroItems: [
      {
        // image: '/images/hero_img_1.jpg',
        image: '/images/hero_img.jpg',
        title: 'Horti Grid',
        // subHeading: 'Your Agribusiness Solutions Partner!',
        description:
          "Explore our crop production, consultancy and market linkage services for niche horticultural value chains. Let’s grow success together!",
        showButton: true,
        height: 'three-quarters',
        toUrl: "/products"
      },
      {
        image: '/images/hero/lima-smart.jpg',
        title: 'Lima Smart',
        description: 'Agribusiness Project Modelling & Guided Extension',
        showButton: true,
        height: 'three-quarters',
        toUrl: '/products/lima-smart',
      },
      {
        image: '/images/hero/irrigation.jpg',
        title: 'Solutions We Offer',
        description:
          'We combine our extensive experience and new technologies designed by our team of Developers, Agriculture, and Agronomy experts to offer these services.',
        showButton: false,
        height: 'three-quarters',
        toUrl: '/',
      },
      {
        image: '/images/portfolio/planting.jpg',
        title: 'Planting Material',
        description:
          '',
        showButton: false,
        height: 'three-quarters',
        toUrl: '/',
      },
      {
        image: '/images/hero/farm.jpg',
        title: 'Agri-Enterprise Planning',
        description:
          'We offer tailored services to optimize productivity, profitability, and sustainability',
        showButton: false,
        height: 'three-quarters',
        toUrl: '/',
      },
      {
        image: '/images/contact/contact-horti.jpg',
        title: 'Reach Out to Us',
        description: "Let's have a chat about your project.",
        showButton: false,
        height: 'three-quarters',
        toUrl: '/',
      },
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
      // {
      //   title: 'Planting material',
      //   icon: 'icon-park-outline:hold-seeds',
      //   description:
      //     'With our expertise in both production and sourcing, we provide reliable planting material, specializing in fruit seedlings such as passion fruit, pomegranates, tamarillo, citrus, and apples. ',
      //   url: '/services/planting-material',
      //   imageUrl: '/images/services/planting-materials.jpg'
      // },
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
    products: [
      {
        title: 'Lima Smart',
        subtitle: 'Agribusiness Project Modelling & Guided Extension',
        description:
          '<p>Through this service, farmers are connected to vital information and providers throughout the value chain, covering everything from business planning to produce marketing. We assist not only with enterprise formulation but also provide guided extension and agro-care services to ensure successful production and market readiness.</p> <p>We are transitioning to virtual service provision using information technology. This move will decentralize our services, engage more agronomists among other service providers, and streamline crop management for future out-growers.</p>',
        url: '/products/lima-smart',
        imageUrl: '/images/lima-smart/lima-smart (4).jpg'
      },
      {
        title: 'Plateau Greens',
        subtitle: 'Guided Extension, Agro-Care, Market Readiness, Market Linkage & Value Addition',
        description:
          '<p>This is the fresh produce division of Horti Grid, specializing in production and providing production management and market linkage for out-growers through a social enterprise model. Over the next three years, our primary focus will be on Passion fruit and herbs for export, alongside mushrooms for local markets. Furthermore, we are actively developing value-added products, such as passion fruit juice for local consumption.</p> <p>Our operations strictly adhere to global standards like KS1758, GlobalGAP (Global Good Agricultural Practices), and GRASP (GlobalGAP Risk Assessment on Social Practice). Ensuring compliance on the part of any outgrower agreements is integral to our engagement and market linkage processes.</p>',
        url: '/products/plateau-greens',
        imageUrl: '/images/plateau-greens/plateau-greens (3).jpg'
      },
      {
        title: 'Agritude Academy',
        subtitle: 'Capacity building, Skills Development, Job Creation ',
        description:
          '<p>The Agritude 101 Academy is a vocational skills development and attitude change program whose goal is to build the capacities of young agribusiness professionals and enthusiasts, positioning them for employment and business development opportunities. </p> <p>Through this academy, we have designed an Agri-Enterprise Manager Training Course aimed at equipping participants with crucial industry knowledge and practical skills for sustainably setting up and running an enterprise in horticulture. This course effectively bridges the gap between classroom learning and real-world agribusiness enterprise management.</p>',
        url: '/products/agritude-academy',
        imageUrl: '/images/agritude/agritude (2).jpg'
      },
      {
        title: 'Production Support Services',
        subtitle: 'Farm Infrastructure, Production Guides',
        description:
          '<ol class="list-decimal"><li class="font-bold py-5">Farm Infrastructure Customisation and Set Up</li><p>We help design and customize a repertoire of farm structures and systems including but not limited to drip Irrigation and fertigation systems, standard greenhouses and screen houses for nurseries and field production, post-harvest structures, and waste disposal units</p><li class="font-bold py-5">Crop Production Field Guides</li><p>Our comprehensive but easy-to-understand crop handbooks include industry information, simple budgets, best practices and management techniques, and other valuable insights to enhance crop productivity and profitability. These handbooks are designed to provide farmers with not only technical knowledge but also skills that will ensure sustainable farming practices.</p></ol>',
        url: '/products/production-support-services',
        imageUrl: '/images/farm-infrastructure/farm-infrastructure1 (5).jpg'
      },
    ],
    projects: [
      {
        projectName: 'Coffee Irrigation ',
        client: 'Chebirir Farms, Jacks Farm,Philip’s Farm',
        scopeOfWork:
          'Installation and maintenance of irrigation systems on Coffee plantation ',
        county: 'Kericho',
        year: '2023',
        imageUrl: '/images/chebirir-farm/chebirir-farm1.jpg',
        projectUrl: 'coffee-irrigation',
        projectImages: ['/images/chebirir-farm/chebirir-farm.jpg', '/images/chebirir-farm/chebirir-farm1.jpg', '/images/chebirir-farm/chebirir-farm-2.jpg',]
      },
      {
        projectName: 'Agri Jobs for Youth',
        client: 'GIZ',
        scopeOfWork:
          'Business Development Services, Training and Extension Service Provision in Passion Fruit Value Chain',
        county: 'Bungoma, Kakamega,Siaya,Kisumu',
        year: '2022',
        imageUrl: '/images/about/youth-jobs.jpg',
        projectUrl: 'agri-jobs-for-youth',
        projectImages: ['/images/services/extension.jpg', '/images/services/farm-infrastructure.jpg', '/images/services/agronomic-support.jpg', '/images/services/farmer-extension.jpg', '/images/services/market-linkage.jpg']
      },
      {
        projectName: 'Mvua Pap!',
        client: 'Untapped Inc.',
        scopeOfWork:
          'Development of a business and sales model for a solar powered water pump for irrigation and domestic use',
        county: 'Nairobi',
        year: '2020',
        imageUrl: '/images/about/mvua-pap.jpg',
        projectUrl: 'mvua-pap',
        projectImages: ['/images/services/extension.jpg', '/images/services/farm-infrastructure.jpg', '/images/services/agronomic-support.jpg', '/images/services/farmer-extension.jpg', '/images/services/market-linkage.jpg']
      },
      {
        projectName: 'Run for Food',
        client: 'Runners’ Heal',
        scopeOfWork:
          'Setting up a fully irrigated school farm for domestic food consumption',
        county: 'Egeiyo Marakwet',
        year: '2018',
        imageUrl: '/images/about/running.jpg',
        projectUrl: 'run-for-food',
        projectImages: ['/images/services/extension.jpg', '/images/services/farm-infrastructure.jpg', '/images/services/agronomic-support.jpg', '/images/services/farmer-extension.jpg', '/images/services/market-linkage.jpg']
      },
      {
        projectName: 'Future Coffee Farmers',
        client: 'Gente Del Futuro',
        scopeOfWork:
          'Development of coffee production curricula for young coffee farmers ',
        county: 'Kilimanjaro Region – Tanzania',
        year: '2018',
        imageUrl: '/images/future-coffee/future-coffee4.jpg',
        projectUrl: 'future-coffee-farmers',
        projectImages: ['/images/future-coffee/future-coffee.jpg', '/images/future-coffee/future-coffee1.jpg', '/images/future-coffee/future-coffee2.jpg', '/images/future-coffee/future-coffee3.jpg', '/images/future-coffee/future-coffee4.jpg', '/images/future-coffee/future-coffee5.jpg']
      },
      {
        projectName: 'Horti Grid Demonstration Center',
        client: 'Horti Grid',
        scopeOfWork:
          'Our production and capacity-building center for showcasing sustainable horticulture ',
        county: 'Uasin Gishu',
        year: '2023',
        imageUrl: '/images/about/land.jpg',
        projectUrl: 'horti-grid-demo-center',
        projectImages: ['/images/services/extension.jpg', '/images/services/farm-infrastructure.jpg', '/images/services/agronomic-support.jpg', '/images/services/farmer-extension.jpg', '/images/services/market-linkage.jpg']
      },
      // {
      //   projectName: 'Kijana na Acre',
      //   client: 'Uasin Gishu County',
      //   scopeOfWork:
      //     'Construction of post-harvest units for horticultural produce',
      //   county: 'Uasin Gishu',
      //   year: '2014',
      //   imageUrl: '/images/about/land.jpg',
      //   projectUrl: 'kijana-na-acre',
      //   projectImages: ['/images/services/extension.jpg', '/images/services/farm-infrastructure.jpg', '/images/services/agronomic-support.jpg', '/images/services/farmer-extension.jpg', '/images/services/market-linkage.jpg']
      // },
      // {
      //   projectName: 'Mama na 1/8th',
      //   client: 'Work Her Dream Organisation',
      //   scopeOfWork:
      //     'Training and extension service provision for Indigenous vegetable farmers for a contracted market',
      //   county: 'Uasin Gishu',
      //   year: '2018',
      //   imageUrl: '/images/about/women.jpg',
      //   projectUrl: 'mama-na-one-eighth',
      //   projectImages: ['/images/services/extension.jpg', '/images/services/farm-infrastructure.jpg', '/images/services/agronomic-support.jpg', '/images/services/farmer-extension.jpg', '/images/services/market-linkage.jpg']
      // },
      // {
      //   projectName: 'Potato project',
      //   client: 'Kapsengwet Farm ',
      //   scopeOfWork:
      //     'Production planning, irrigation systems setup, crop establishment, and management for a large-scale potato farm',
      //   county: 'Uasin Gishu',
      //   year: '2018',
      //   imageUrl: '/images/about/potatoes.jpg',
      //   projectUrl: 'potato-project',
      //   projectImages: ['/images/services/extension.jpg', '/images/services/farm-infrastructure.jpg', '/images/services/agronomic-support.jpg', '/images/services/farmer-extension.jpg', '/images/services/market-linkage.jpg']
      // },
      {
        projectName: 'Occupational Safety for IPM',
        client: 'Kailey’s Consortium',
        scopeOfWork:
          'Capacity building of fruit and vegetable farm workers through IPM training ',
        county: 'Nakuru, Kajiado, Kiambu, Nakuru',
        year: '2016',
        imageUrl: '/images/about/safety.jpg',
        projectUrl: 'occupational-safety-for-IPM',
        projectImages: ['/images/services/extension.jpg', '/images/services/farm-infrastructure.jpg', '/images/services/agronomic-support.jpg', '/images/services/farmer-extension.jpg', '/images/services/market-linkage.jpg']
      },
      {
        projectName: 'Project Nurture ',
        client: 'Technoserve Inc.',
        scopeOfWork:
          'Set up of controlled environments; passion fruit seedling nurseries for the project',
        county: 'Uasin Gishu',
        year: '2015',
        imageUrl: '/images/about/passion-fruit.jpg',
        projectUrl: 'project-nurture',
        projectImages: ['/images/services/extension.jpg', '/images/services/farm-infrastructure.jpg', '/images/services/agronomic-support.jpg', '/images/services/farmer-extension.jpg', '/images/services/market-linkage.jpg']
      },
    ],
  }),
})
