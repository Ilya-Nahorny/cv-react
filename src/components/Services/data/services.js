const services = [
  {
    id: 1,
    name: "Web Design",
    slug: "web-design",
    summary: "Professional web design services.",
    content: `
      <h1 class="text-5xl font-extrabold dark:text-darkTextMain my-6">The Future of Web Development</h1>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        Web development has come a long way from its early days of static HTML pages. With the advent of JavaScript and CSS, developers were able to create more interactive and dynamic web applications. Today, technologies like React and Vue.js are pushing the boundaries of what can be achieved on the web, enabling developers to build highly responsive and scalable applications.
      </p>
      <h3 class="text-3xl font-bold dark:text-darkTextMain my-6">The Rise of JavaScript Frameworks</h3>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        JavaScript frameworks like React, Angular, and Vue.js have become integral to modern web development. React, developed by Facebook, is known for its component-based architecture, which allows developers to build reusable UI components. Angular, maintained by Google, offers a full-fledged framework with powerful tools for building complex applications. Vue.js is a progressive framework that provides a balance between ease of use and advanced features.
      </p>
      <div class="relative my-8"><img src="/images/services/660x660.webp" alt="JavaScript Frameworks" class="w-full md:h-[500px] object-cover cursor-pointer rounded-lg my-8"/></div>
      <h3 class="text-3xl font-bold dark:text-darkTextMain my-6">Serverless Architectures</h3>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        Serverless architectures are gaining popularity as they simplify application deployment and management. Instead of managing servers, developers can focus on writing code while the cloud provider handles the infrastructure. Services like AWS Lambda, Google Cloud Functions, and Azure Functions offer scalable compute resources on demand, making it easier to build and deploy applications quickly.
      </p>
      <blockquote class="p-4 my-8 border-s-4 border-gray-300 bg-gray-50 dark:bg-darkBgMain dark:border-darkBorder">
        <p class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-darkTextChild">
          “Serverless computing allows developers to focus on writing code without worrying about the underlying infrastructure.” - Anonymous
        </p>
      </blockquote>
      <h3 class="text-3xl font-bold dark:text-darkTextMain my-6">The Importance of User Experience (UX)</h3>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        User experience (UX) plays a crucial role in web development. A well-designed UX ensures that users can navigate and interact with applications seamlessly. Modern web development practices emphasize responsive design, fast load times, and intuitive interfaces. Tools like Figma and Adobe XD are widely used for designing and prototyping user interfaces, while performance optimization techniques help ensure a smooth user experience.
      </p>
      <h5 class="text-xl font-bold dark:text-darkTextMain my-6">Future Trends in Web Development</h5>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        Looking ahead, several trends are likely to shape the future of web development. Artificial Intelligence (AI) and Machine Learning (ML) will become increasingly integrated into web applications, offering personalized experiences and advanced analytics. Progressive Web Apps (PWAs) will continue to bridge the gap between web and mobile applications, providing offline capabilities and improved performance.
      </p>
      <ul class="max-w-md space-y-2 text-gray-500 list-disc list-inside dark:text-darkTextChild my-6">
        <li>AI and ML integration for smarter applications</li>
        <li>Progressive Web Apps for a seamless experience</li>
        <li>Enhanced performance optimization techniques</li>
        <li>Increased focus on security and data privacy</li>
      </ul>
      <hr class="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700"/>
      <pre class="bg-gray-100 dark:bg-darkBgChild p-4 rounded-lg my-6 overflow-x-auto"><code class="text-gray-900 dark:text-darkTextMain">const add = (a, b) => a + b;
console.log(add(2, 3));</code></pre>
      <a href="https://example.com" class="text-blue-500 hover:underline my-6 dark:text-darkHref" rel="noopener noreferrer">Visit Example</a>
       
      <div class="relative overflow-x-auto my-6">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-darkTextChild">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-darkBgChild dark:text-darkTextMain">
            <tr>
              <th scope="col" class="px-6 py-3">Product name</th>
              <th scope="col" class="px-6 py-3">Color</th>
              <th scope="col" class="px-6 py-3">Category</th>
              <th scope="col" class="px-6 py-3">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-darkBgMain dark:border-gray-700">
              <td class="px-6 py-4">Apple MacBook Pro 17</td>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">$2999</td>
            </tr>
            <tr class="bg-white border-b dark:bg-darkBgMain dark:border-gray-700">
              <td class="px-6 py-4">Microsoft Surface Pro</td>
              <td class="px-6 py-4">White</td>
              <td class="px-6 py-4">Tablet</td>
              <td class="px-6 py-4">$1999</td>
            </tr>
            <tr class="bg-white border-b dark:bg-darkBgMain dark:border-gray-700">
              <td class="px-6 py-4">Magic Mouse 2</td>
              <td class="px-6 py-4">Black</td>
              <td class="px-6 py-4">Accessories</td>
              <td class="px-6 py-4">$99</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        In summary, the future of web development is exciting and full of opportunities. By staying abreast of emerging technologies and trends, developers can build innovative applications that meet the evolving needs of users and leverage the latest advancements in the field.
      </p>
      <ol class="space-y-4 text-gray-500 list-decimal list-inside dark:text-darkTextChild my-6">
        <li>JavaScript frameworks are essential for modern web development.
          <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
            <li>React</li>
            <li>Angular</li>
            <li>Vue.js</li>
          </ul>
        </li>
        <li>Serverless architectures offer many benefits, such as:
          <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
            <li>Reduced server management</li>
            <li>Scalability</li>
            <li>Cost efficiency</li>
          </ul>
        </li>
      </ol>
    `,
    image: "/images/services/328x240.webp",
    isPricing: true,
    isFaqs: true,
    pricing: [
      {
        title: "Basic",
        price: 14,
        color1: "from-green-500",
        color2: "to-green-300",
        color3: "bg-green-500",
        color4: "text-green-500",
        description:
          "Ideal for individuals that need a custom solution with custom tools.",
        included: [
          "Customizable platform",
          "Payment integrations",
          "Marketing tools",
          "User-friendly design",
        ],
      },
      {
        title: "Standard",
        price: 34,
        color1: "from-blue-500",
        color2: "to-blue-300",
        color3: "bg-blue-500",
        color4: "text-blue-500",
        description:
          "Perfect for small teams needing more features and flexibility.",
        included: [
          "SEO optimization",
          "Fast loading times",
          "Customizable templates",
          "Mobile-responsive design",
        ],
      },
      {
        title: "Advanced",
        price: 54,
        color1: "from-pink-500",
        color2: "to-pink-300",
        color3: "bg-pink-500",
        color4: "text-pink-500",
        description:
          "Best for larger teams or enterprises needing advanced features.",
        included: [
          "Content management system",
          "Social media integration",
          "Email integration",
          "Advanced analytics tools",
        ],
      },
    ],
    faqs: [
      {
        question: "How long does web design take?",
        answer: "1-4 weeks depending on the project size.",
      },
      {
        question: "Are revisions included?",
        answer: "Yes, we offer 3 revisions.",
      },
      {
        question: "What kind of payment options do you offer?",
        answer: "We accept credit card, PayPal, and bank transfer.",
      },
      {
        question: "Do you offer maintenance services?",
        answer: "Yes, we offer ongoing maintenance packages.",
      },
      {
        question: "Can you help with website hosting?",
        answer: "Yes, we can help you choose and set up hosting.",
      },
    ],
  },
  {
    id: 2,
    name: "Mobile App Development",
    slug: "mobile-app-development",
    summary: "Build high-quality mobile apps for iOS and Android.",
    content: `
      <h1 class="text-5xl font-extrabold dark:text-darkTextMain my-6">The Future of Web Development</h1>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        Web development has come a long way from its early days of static HTML pages. With the advent of JavaScript and CSS, developers were able to create more interactive and dynamic web applications. Today, technologies like React and Vue.js are pushing the boundaries of what can be achieved on the web, enabling developers to build highly responsive and scalable applications.
      </p>
      <h3 class="text-3xl font-bold dark:text-darkTextMain my-6">The Rise of JavaScript Frameworks</h3>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        JavaScript frameworks like React, Angular, and Vue.js have become integral to modern web development. React, developed by Facebook, is known for its component-based architecture, which allows developers to build reusable UI components. Angular, maintained by Google, offers a full-fledged framework with powerful tools for building complex applications. Vue.js is a progressive framework that provides a balance between ease of use and advanced features.
      </p>
      <div class="relative my-8"><img src="/images/blog/660x660.webp" alt="JavaScript Frameworks" class="w-full md:h-[500px] object-cover cursor-pointer rounded-lg my-8"/></div>
      <h3 class="text-3xl font-bold dark:text-darkTextMain my-6">Serverless Architectures</h3>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        Serverless architectures are gaining popularity as they simplify application deployment and management. Instead of managing servers, developers can focus on writing code while the cloud provider handles the infrastructure. Services like AWS Lambda, Google Cloud Functions, and Azure Functions offer scalable compute resources on demand, making it easier to build and deploy applications quickly.
      </p>
      <blockquote class="p-4 my-8 border-s-4 border-gray-300 bg-gray-50 dark:bg-darkBgMain dark:border-darkBorder">
        <p class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-darkTextChild">
          “Serverless computing allows developers to focus on writing code without worrying about the underlying infrastructure.” - Anonymous
        </p>
      </blockquote>
      <h3 class="text-3xl font-bold dark:text-darkTextMain my-6">The Importance of User Experience (UX)</h3>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        User experience (UX) plays a crucial role in web development. A well-designed UX ensures that users can navigate and interact with applications seamlessly. Modern web development practices emphasize responsive design, fast load times, and intuitive interfaces. Tools like Figma and Adobe XD are widely used for designing and prototyping user interfaces, while performance optimization techniques help ensure a smooth user experience.
      </p>
      <h5 class="text-xl font-bold dark:text-darkTextMain my-6">Future Trends in Web Development</h5>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        Looking ahead, several trends are likely to shape the future of web development. Artificial Intelligence (AI) and Machine Learning (ML) will become increasingly integrated into web applications, offering personalized experiences and advanced analytics. Progressive Web Apps (PWAs) will continue to bridge the gap between web and mobile applications, providing offline capabilities and improved performance.
      </p>
      <ul class="max-w-md space-y-2 text-gray-500 list-disc list-inside dark:text-darkTextChild my-6">
        <li>AI and ML integration for smarter applications</li>
        <li>Progressive Web Apps for a seamless experience</li>
        <li>Enhanced performance optimization techniques</li>
        <li>Increased focus on security and data privacy</li>
      </ul>
      <hr class="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700"/>
      <pre class="bg-gray-100 dark:bg-darkBgChild p-4 rounded-lg my-6 overflow-x-auto"><code class="text-gray-900 dark:text-darkTextMain">const add = (a, b) => a + b;
console.log(add(2, 3));</code></pre>
      <a href="https://example.com" class="text-blue-500 hover:underline my-6 dark:text-darkHref" rel="noopener noreferrer">Visit Example</a>
       
      <div class="relative overflow-x-auto my-6">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-darkTextChild">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-darkBgChild dark:text-darkTextMain">
            <tr>
              <th scope="col" class="px-6 py-3">Product name</th>
              <th scope="col" class="px-6 py-3">Color</th>
              <th scope="col" class="px-6 py-3">Category</th>
              <th scope="col" class="px-6 py-3">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-darkBgMain dark:border-gray-700">
              <td class="px-6 py-4">Apple MacBook Pro 17</td>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">$2999</td>
            </tr>
            <tr class="bg-white border-b dark:bg-darkBgMain dark:border-gray-700">
              <td class="px-6 py-4">Microsoft Surface Pro</td>
              <td class="px-6 py-4">White</td>
              <td class="px-6 py-4">Tablet</td>
              <td class="px-6 py-4">$1999</td>
            </tr>
            <tr class="bg-white border-b dark:bg-darkBgMain dark:border-gray-700">
              <td class="px-6 py-4">Magic Mouse 2</td>
              <td class="px-6 py-4">Black</td>
              <td class="px-6 py-4">Accessories</td>
              <td class="px-6 py-4">$99</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        In summary, the future of web development is exciting and full of opportunities. By staying abreast of emerging technologies and trends, developers can build innovative applications that meet the evolving needs of users and leverage the latest advancements in the field.
      </p>
      <ol class="space-y-4 text-gray-500 list-decimal list-inside dark:text-darkTextChild my-6">
        <li>JavaScript frameworks are essential for modern web development.
          <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
            <li>React</li>
            <li>Angular</li>
            <li>Vue.js</li>
          </ul>
        </li>
        <li>Serverless architectures offer many benefits, such as:
          <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
            <li>Reduced server management</li>
            <li>Scalability</li>
            <li>Cost efficiency</li>
          </ul>
        </li>
      </ol>
    `,
    image: "/images/services/328x240.webp",
    isPricing: true,
    isFaqs: true,
    pricing: [
      {
        title: "Basic",
        price: 24,
        color1: "from-green-500",
        color2: "to-green-300",
        color3: "bg-green-500",
        color4: "text-green-500",
        description:
          "Simple app with basic features, ideal for startups or personal projects.",
        included: [
          "Basic design and functionality",
          "iOS and Android compatibility",
          "Limited backend integration",
        ],
      },
      {
        title: "Standard",
        price: 44,
        color1: "from-blue-500",
        color2: "to-blue-300",
        color3: "bg-blue-500",
        color4: "text-blue-500",
        description:
          "Feature-rich app with advanced functionality, suitable for businesses and organizations.",
        included: [
          "Custom design and user interface",
          "Full iOS and Android compatibility",
          "Robust backend integration",
        ],
      },
      {
        title: "Advanced",
        price: 64,
        color1: "from-pink-500",
        color2: "to-pink-300",
        color3: "bg-pink-500",
        color4: "text-pink-500",
        description:
          "Highly customized app with complex features, perfect for large enterprises.",
        included: [
          "Advanced design and user experience",
          "Platform-specific features",
          "Scalable backend infrastructure",
        ],
      },
    ],
    faqs: [
      {
        question: "What platforms do you develop for?",
        answer: "We develop for both iOS and Android.",
      },
      {
        question: "Do you offer app store publishing services?",
        answer:
          "Yes, we can help you submit your app to the App Store and Google Play.",
      },
      {
        question: "What is your development process?",
        answer:
          "Our development process involves planning, design, development, testing, and deployment.",
      },
      {
        question: "Do you offer app maintenance services?",
        answer:
          "Yes, we offer ongoing maintenance packages to ensure your app is up-to-date and bug-free.",
      },
      {
        question: "What is your hourly rate?",
        answer:
          "Our hourly rate varies depending on the complexity of the project.",
      },
    ],
  },
  {
    id: 3,
    name: "E-commerce Development",
    slug: "e-commerce-development",
    summary: "Build powerful and secure online stores.",
    content: `
      <h1 class="text-5xl font-extrabold dark:text-darkTextMain my-6">The Future of Web Development</h1>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        Web development has come a long way from its early days of static HTML pages. With the advent of JavaScript and CSS, developers were able to create more interactive and dynamic web applications. Today, technologies like React and Vue.js are pushing the boundaries of what can be achieved on the web, enabling developers to build highly responsive and scalable applications.
      </p>
      <h3 class="text-3xl font-bold dark:text-darkTextMain my-6">The Rise of JavaScript Frameworks</h3>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        JavaScript frameworks like React, Angular, and Vue.js have become integral to modern web development. React, developed by Facebook, is known for its component-based architecture, which allows developers to build reusable UI components. Angular, maintained by Google, offers a full-fledged framework with powerful tools for building complex applications. Vue.js is a progressive framework that provides a balance between ease of use and advanced features.
      </p>
      <div class="relative my-8"><img src="/images/blog/660x660.webp" alt="JavaScript Frameworks" class="w-full md:h-[500px] object-cover cursor-pointer rounded-lg my-8"/></div>
      <h3 class="text-3xl font-bold dark:text-darkTextMain my-6">Serverless Architectures</h3>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        Serverless architectures are gaining popularity as they simplify application deployment and management. Instead of managing servers, developers can focus on writing code while the cloud provider handles the infrastructure. Services like AWS Lambda, Google Cloud Functions, and Azure Functions offer scalable compute resources on demand, making it easier to build and deploy applications quickly.
      </p>
      <blockquote class="p-4 my-8 border-s-4 border-gray-300 bg-gray-50 dark:bg-darkBgMain dark:border-darkBorder">
        <p class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-darkTextChild">
          “Serverless computing allows developers to focus on writing code without worrying about the underlying infrastructure.” - Anonymous
        </p>
      </blockquote>
      <h3 class="text-3xl font-bold dark:text-darkTextMain my-6">The Importance of User Experience (UX)</h3>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        User experience (UX) plays a crucial role in web development. A well-designed UX ensures that users can navigate and interact with applications seamlessly. Modern web development practices emphasize responsive design, fast load times, and intuitive interfaces. Tools like Figma and Adobe XD are widely used for designing and prototyping user interfaces, while performance optimization techniques help ensure a smooth user experience.
      </p>
      <h5 class="text-xl font-bold dark:text-darkTextMain my-6">Future Trends in Web Development</h5>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        Looking ahead, several trends are likely to shape the future of web development. Artificial Intelligence (AI) and Machine Learning (ML) will become increasingly integrated into web applications, offering personalized experiences and advanced analytics. Progressive Web Apps (PWAs) will continue to bridge the gap between web and mobile applications, providing offline capabilities and improved performance.
      </p>
      <ul class="max-w-md space-y-2 text-gray-500 list-disc list-inside dark:text-darkTextChild my-6">
        <li>AI and ML integration for smarter applications</li>
        <li>Progressive Web Apps for a seamless experience</li>
        <li>Enhanced performance optimization techniques</li>
        <li>Increased focus on security and data privacy</li>
      </ul>
      <hr class="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700"/>
      <pre class="bg-gray-100 dark:bg-darkBgChild p-4 rounded-lg my-6 overflow-x-auto"><code class="text-gray-900 dark:text-darkTextMain">const add = (a, b) => a + b;
console.log(add(2, 3));</code></pre>
      <a href="https://example.com" class="text-blue-500 hover:underline my-6 dark:text-darkHref" rel="noopener noreferrer">Visit Example</a>
      
      <div class="relative overflow-x-auto my-6">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-darkTextChild">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-darkBgChild dark:text-darkTextMain">
            <tr>
              <th scope="col" class="px-6 py-3">Product name</th>
              <th scope="col" class="px-6 py-3">Color</th>
              <th scope="col" class="px-6 py-3">Category</th>
              <th scope="col" class="px-6 py-3">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-darkBgMain dark:border-gray-700">
              <td class="px-6 py-4">Apple MacBook Pro 17</td>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">$2999</td>
            </tr>
            <tr class="bg-white border-b dark:bg-darkBgMain dark:border-gray-700">
              <td class="px-6 py-4">Microsoft Surface Pro</td>
              <td class="px-6 py-4">White</td>
              <td class="px-6 py-4">Tablet</td>
              <td class="px-6 py-4">$1999</td>
            </tr>
            <tr class="bg-white border-b dark:bg-darkBgMain dark:border-gray-700">
              <td class="px-6 py-4">Magic Mouse 2</td>
              <td class="px-6 py-4">Black</td>
              <td class="px-6 py-4">Accessories</td>
              <td class="px-6 py-4">$99</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        In summary, the future of web development is exciting and full of opportunities. By staying abreast of emerging technologies and trends, developers can build innovative applications that meet the evolving needs of users and leverage the latest advancements in the field.
      </p>
      <ol class="space-y-4 text-gray-500 list-decimal list-inside dark:text-darkTextChild my-6">
        <li>JavaScript frameworks are essential for modern web development.
          <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
            <li>React</li>
            <li>Angular</li>
            <li>Vue.js</li>
          </ul>
        </li>
        <li>Serverless architectures offer many benefits, such as:
          <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
            <li>Reduced server management</li>
            <li>Scalability</li>
            <li>Cost efficiency</li>
          </ul>
        </li>
      </ol>
    `,
    image: "/images/services/328x240.webp",
    isPricing: true,
    isFaqs: true,
    pricing: [
      {
        title: "Basic",
        price: 34,
        color1: "from-green-500",
        color2: "to-green-300",
        color3: "bg-green-500",
        color4: "text-green-500",
        description:
          "Feature-rich e-commerce store with advanced functionalities.",
        included: [
          "Basic design and functionality",
          "Product catalog and management",
          "Secure checkout process",
        ],
      },
      {
        title: "Standard",
        price: 54,
        color1: "from-blue-500",
        color2: "to-blue-300",
        color3: "bg-blue-500",
        color4: "text-blue-500",
        description:
          "Feature-rich e-commerce store with advanced functionalities.",
        included: [
          "Custom design and user interface",
          "Advanced product management",
          "Marketing and analytics tools",
        ],
      },
      {
        title: "Advanced",
        price: 74,
        color1: "from-pink-500",
        color2: "to-pink-300",
        color3: "bg-pink-500",
        color4: "text-pink-500",
        description:
          "Highly customized e-commerce store with enterprise-level features.",
        included: [
          "Seamless integration with other systems",
          "Scalable infrastructure",
          "Dedicated support and maintenance",
        ],
      },
    ],
    faqs: [
      {
        question: "What e-commerce platforms do you specialize in?",
        answer:
          "We specialize in Shopify, WooCommerce, Magento, and BigCommerce.",
      },
      {
        question: "Do you offer custom e-commerce development?",
        answer:
          "Yes, we offer custom e-commerce development to meet specific business needs.",
      },
      {
        question: "What payment gateways do you integrate with?",
        answer:
          "We integrate with popular payment gateways like PayPal, Stripe, and Square.",
      },
      {
        question: "Do you provide ongoing support and maintenance?",
        answer:
          "Yes, we offer ongoing support and maintenance packages to ensure your store runs smoothly.",
      },
      {
        question: "What is your approach to e-commerce design and UX?",
        answer:
          "We focus on creating visually appealing, user-friendly, and conversion-optimized e-commerce websites.",
      },
    ],
  },
  {
    id: 4,
    name: "Content Management System (CMS) Development",
    slug: "content-management-system-cms-development",
    summary: "Create dynamic and user-friendly websites with CMS.",
    content: `
      <h1 class="text-5xl font-extrabold dark:text-darkTextMain my-6">The Future of Web Development</h1>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        Web development has come a long way from its early days of static HTML pages. With the advent of JavaScript and CSS, developers were able to create more interactive and dynamic web applications. Today, technologies like React and Vue.js are pushing the boundaries of what can be achieved on the web, enabling developers to build highly responsive and scalable applications.
      </p>
      <h3 class="text-3xl font-bold dark:text-darkTextMain my-6">The Rise of JavaScript Frameworks</h3>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        JavaScript frameworks like React, Angular, and Vue.js have become integral to modern web development. React, developed by Facebook, is known for its component-based architecture, which allows developers to build reusable UI components. Angular, maintained by Google, offers a full-fledged framework with powerful tools for building complex applications. Vue.js is a progressive framework that provides a balance between ease of use and advanced features.
      </p>
      <div class="relative my-8"><img src="/images/blog/660x660.webp" alt="JavaScript Frameworks" class="w-full md:h-[500px] object-cover cursor-pointer rounded-lg my-8"/></div>
      <h3 class="text-3xl font-bold dark:text-darkTextMain my-6">Serverless Architectures</h3>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        Serverless architectures are gaining popularity as they simplify application deployment and management. Instead of managing servers, developers can focus on writing code while the cloud provider handles the infrastructure. Services like AWS Lambda, Google Cloud Functions, and Azure Functions offer scalable compute resources on demand, making it easier to build and deploy applications quickly.
      </p>
      <blockquote class="p-4 my-8 border-s-4 border-gray-300 bg-gray-50 dark:bg-darkBgMain dark:border-darkBorder">
        <p class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-darkTextChild">
          “Serverless computing allows developers to focus on writing code without worrying about the underlying infrastructure.” - Anonymous
        </p>
      </blockquote>
      <h3 class="text-3xl font-bold dark:text-darkTextMain my-6">The Importance of User Experience (UX)</h3>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        User experience (UX) plays a crucial role in web development. A well-designed UX ensures that users can navigate and interact with applications seamlessly. Modern web development practices emphasize responsive design, fast load times, and intuitive interfaces. Tools like Figma and Adobe XD are widely used for designing and prototyping user interfaces, while performance optimization techniques help ensure a smooth user experience.
      </p>
      <h5 class="text-xl font-bold dark:text-darkTextMain my-6">Future Trends in Web Development</h5>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        Looking ahead, several trends are likely to shape the future of web development. Artificial Intelligence (AI) and Machine Learning (ML) will become increasingly integrated into web applications, offering personalized experiences and advanced analytics. Progressive Web Apps (PWAs) will continue to bridge the gap between web and mobile applications, providing offline capabilities and improved performance.
      </p>
      <ul class="max-w-md space-y-2 text-gray-500 list-disc list-inside dark:text-darkTextChild my-6">
        <li>AI and ML integration for smarter applications</li>
        <li>Progressive Web Apps for a seamless experience</li>
        <li>Enhanced performance optimization techniques</li>
        <li>Increased focus on security and data privacy</li>
      </ul>
      <hr class="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700"/>
      <pre class="bg-gray-100 dark:bg-darkBgChild p-4 rounded-lg my-6 overflow-x-auto"><code class="text-gray-900 dark:text-darkTextMain">const add = (a, b) => a + b;
console.log(add(2, 3));</code></pre>
      <a href="https://example.com" class="text-blue-500 hover:underline my-6 dark:text-darkHref" rel="noopener noreferrer">Visit Example</a>
       
      <div class="relative overflow-x-auto my-6">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-darkTextChild">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-darkBgChild dark:text-darkTextMain">
            <tr>
              <th scope="col" class="px-6 py-3">Product name</th>
              <th scope="col" class="px-6 py-3">Color</th>
              <th scope="col" class="px-6 py-3">Category</th>
              <th scope="col" class="px-6 py-3">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-darkBgMain dark:border-gray-700">
              <td class="px-6 py-4">Apple MacBook Pro 17</td>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">$2999</td>
            </tr>
            <tr class="bg-white border-b dark:bg-darkBgMain dark:border-gray-700">
              <td class="px-6 py-4">Microsoft Surface Pro</td>
              <td class="px-6 py-4">White</td>
              <td class="px-6 py-4">Tablet</td>
              <td class="px-6 py-4">$1999</td>
            </tr>
            <tr class="bg-white border-b dark:bg-darkBgMain dark:border-gray-700">
              <td class="px-6 py-4">Magic Mouse 2</td>
              <td class="px-6 py-4">Black</td>
              <td class="px-6 py-4">Accessories</td>
              <td class="px-6 py-4">$99</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        In summary, the future of web development is exciting and full of opportunities. By staying abreast of emerging technologies and trends, developers can build innovative applications that meet the evolving needs of users and leverage the latest advancements in the field.
      </p>
      <ol class="space-y-4 text-gray-500 list-decimal list-inside dark:text-darkTextChild my-6">
        <li>JavaScript frameworks are essential for modern web development.
          <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
            <li>React</li>
            <li>Angular</li>
            <li>Vue.js</li>
          </ul>
        </li>
        <li>Serverless architectures offer many benefits, such as:
          <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
            <li>Reduced server management</li>
            <li>Scalability</li>
            <li>Cost efficiency</li>
          </ul>
        </li>
      </ol>
    `,
    image: "/images/services/328x240.webp",
    isPricing: true,
    isFaqs: true,
    pricing: [
      {
        title: "Basic",
        price: 44,
        color1: "from-green-500",
        color2: "to-green-300",
        color3: "bg-green-500",
        color4: "text-green-500",
        description:
          "Feature-rich e-commerce store with advanced functionalities.",
        included: [
          "Basic design and functionality",
          "Content management system",
          "Limited customization options",
        ],
      },
      {
        title: "Standard",
        price: 64,
        color1: "from-blue-500",
        color2: "to-blue-300",
        color3: "bg-blue-500",
        color4: "text-blue-500",
        description:
          "Feature-rich e-commerce store with advanced functionalities.",
        included: [
          "Custom design and user interface",
          "Enhanced content management system",
          "Extensive customization options",
        ],
      },
      {
        title: "Advanced",
        price: 84,
        color1: "from-pink-500",
        color2: "to-pink-300",
        color3: "bg-pink-500",
        color4: "text-pink-500",
        description:
          "Highly customized CMS website with enterprise-level features.",
        included: [
          "Seamless integration with other systems",
          "Advanced security and performance",
          "Dedicated support and maintenance",
        ],
      },
    ],
    faqs: [
      {
        question: "What CMS platforms do you develop with?",
        answer: "We specialize in WordPress, Joomla, Drupal, and Wix.",
      },
      {
        question: "Do you offer custom CMS development?",
        answer:
          "Yes, we offer custom CMS development to meet specific business needs.",
      },
      {
        question: "How do you ensure website security?",
        answer:
          "We implement regular updates, security plugins, and backups to maintain a secure CMS environment.",
      },
      {
        question: "Do you offer training and support for using the CMS?",
        answer:
          "Yes, we provide training and ongoing support to help you manage your CMS website effectively.",
      },
      {
        question: "What is your approach to CMS design and UX?",
        answer:
          "We focus on creating user-friendly and visually appealing CMS websites that are easy to manage and navigate.",
      },
    ],
  },
  {
    id: 5,
    name: "SEO Services",
    slug: "seo-services",
    summary: "Improve your website's visibility and traffic with SEO.",
    content: `
      <h1 class="text-5xl font-extrabold dark:text-darkTextMain my-6">The Future of Web Development</h1>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        Web development has come a long way from its early days of static HTML pages. With the advent of JavaScript and CSS, developers were able to create more interactive and dynamic web applications. Today, technologies like React and Vue.js are pushing the boundaries of what can be achieved on the web, enabling developers to build highly responsive and scalable applications.
      </p>
      <h3 class="text-3xl font-bold dark:text-darkTextMain my-6">The Rise of JavaScript Frameworks</h3>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        JavaScript frameworks like React, Angular, and Vue.js have become integral to modern web development. React, developed by Facebook, is known for its component-based architecture, which allows developers to build reusable UI components. Angular, maintained by Google, offers a full-fledged framework with powerful tools for building complex applications. Vue.js is a progressive framework that provides a balance between ease of use and advanced features.
      </p>
      <div class="relative my-8"><img src="/images/blog/660x660.webp" alt="JavaScript Frameworks" class="w-full md:h-[500px] object-cover cursor-pointer rounded-lg my-8"/></div>
      <h3 class="text-3xl font-bold dark:text-darkTextMain my-6">Serverless Architectures</h3>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        Serverless architectures are gaining popularity as they simplify application deployment and management. Instead of managing servers, developers can focus on writing code while the cloud provider handles the infrastructure. Services like AWS Lambda, Google Cloud Functions, and Azure Functions offer scalable compute resources on demand, making it easier to build and deploy applications quickly.
      </p>
      <blockquote class="p-4 my-8 border-s-4 border-gray-300 bg-gray-50 dark:bg-darkBgMain dark:border-darkBorder">
        <p class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-darkTextChild">
          “Serverless computing allows developers to focus on writing code without worrying about the underlying infrastructure.” - Anonymous
        </p>
      </blockquote>
      <h3 class="text-3xl font-bold dark:text-darkTextMain my-6">The Importance of User Experience (UX)</h3>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        User experience (UX) plays a crucial role in web development. A well-designed UX ensures that users can navigate and interact with applications seamlessly. Modern web development practices emphasize responsive design, fast load times, and intuitive interfaces. Tools like Figma and Adobe XD are widely used for designing and prototyping user interfaces, while performance optimization techniques help ensure a smooth user experience.
      </p>
      <h5 class="text-xl font-bold dark:text-darkTextMain my-6">Future Trends in Web Development</h5>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        Looking ahead, several trends are likely to shape the future of web development. Artificial Intelligence (AI) and Machine Learning (ML) will become increasingly integrated into web applications, offering personalized experiences and advanced analytics. Progressive Web Apps (PWAs) will continue to bridge the gap between web and mobile applications, providing offline capabilities and improved performance.
      </p>
      <ul class="max-w-md space-y-2 text-gray-500 list-disc list-inside dark:text-darkTextChild my-6">
        <li>AI and ML integration for smarter applications</li>
        <li>Progressive Web Apps for a seamless experience</li>
        <li>Enhanced performance optimization techniques</li>
        <li>Increased focus on security and data privacy</li>
      </ul>
      <hr class="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700"/>
      <pre class="bg-gray-100 dark:bg-darkBgChild p-4 rounded-lg my-6 overflow-x-auto"><code class="text-gray-900 dark:text-darkTextMain">const add = (a, b) => a + b;
console.log(add(2, 3));</code></pre>
      <a href="https://example.com" class="text-blue-500 hover:underline my-6 dark:text-darkHref" rel="noopener noreferrer">Visit Example</a>
      
      <div class="relative overflow-x-auto my-6">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-darkTextChild">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-darkBgChild dark:text-darkTextMain">
            <tr>
              <th scope="col" class="px-6 py-3">Product name</th>
              <th scope="col" class="px-6 py-3">Color</th>
              <th scope="col" class="px-6 py-3">Category</th>
              <th scope="col" class="px-6 py-3">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-darkBgMain dark:border-gray-700">
              <td class="px-6 py-4">Apple MacBook Pro 17</td>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">$2999</td>
            </tr>
            <tr class="bg-white border-b dark:bg-darkBgMain dark:border-gray-700">
              <td class="px-6 py-4">Microsoft Surface Pro</td>
              <td class="px-6 py-4">White</td>
              <td class="px-6 py-4">Tablet</td>
              <td class="px-6 py-4">$1999</td>
            </tr>
            <tr class="bg-white border-b dark:bg-darkBgMain dark:border-gray-700">
              <td class="px-6 py-4">Magic Mouse 2</td>
              <td class="px-6 py-4">Black</td>
              <td class="px-6 py-4">Accessories</td>
              <td class="px-6 py-4">$99</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        In summary, the future of web development is exciting and full of opportunities. By staying abreast of emerging technologies and trends, developers can build innovative applications that meet the evolving needs of users and leverage the latest advancements in the field.
      </p>
      <ol class="space-y-4 text-gray-500 list-decimal list-inside dark:text-darkTextChild my-6">
        <li>JavaScript frameworks are essential for modern web development.
          <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
            <li>React</li>
            <li>Angular</li>
            <li>Vue.js</li>
          </ul>
        </li>
        <li>Serverless architectures offer many benefits, such as:
          <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
            <li>Reduced server management</li>
            <li>Scalability</li>
            <li>Cost efficiency</li>
          </ul>
        </li>
      </ol>
    `,
    image: "/images/services/328x240.webp",
    isPricing: true,
    isFaqs: true,
    pricing: [
      {
        title: "Basic",
        price: 54,
        color1: "from-green-500",
        color2: "to-green-300",
        color3: "bg-green-500",
        color4: "text-green-500",
        description:
          "Feature-rich e-commerce store with advanced functionalities.",
        included: [
          "Keyword research",
          "On-page optimization",
          "Basic backlinking",
        ],
      },
      {
        title: "Standard",
        price: 74,
        color1: "from-blue-500",
        color2: "to-blue-300",
        color3: "bg-blue-500",
        color4: "text-blue-500",
        description:
          "Feature-rich e-commerce store with advanced functionalities.",
        included: [
          "In-depth keyword research",
          "Advanced on-page optimization",
          "Targeted backlinking",
        ],
      },
      {
        title: "Advanced",
        price: 94,
        color1: "from-pink-500",
        color2: "to-pink-300",
        color3: "bg-pink-500",
        color4: "text-pink-500",
        description:
          "Feature-rich e-commerce store with advanced functionalities.",
        included: [
          "Strategic keyword research",
          "Content marketing and optimization",
          "Extensive backlinking strategy",
        ],
      },
    ],
    faqs: [
      {
        question: "How long does it take to see results from SEO?",
        answer:
          "SEO is a long-term strategy, and results can take several months to appear.",
      },
      {
        question: "What is your approach to keyword research?",
        answer:
          "We conduct thorough keyword research to identify the most relevant and effective keywords for your target audience.",
      },
      {
        question: "How do you measure SEO success?",
        answer:
          "We track key metrics such as website traffic, rankings, and conversions to measure SEO success.",
      },
      {
        question: "Do you offer ongoing SEO maintenance?",
        answer:
          "Yes, we offer ongoing SEO maintenance to ensure your website stays optimized and competitive.",
      },
      {
        question: "What is your approach to backlinking?",
        answer:
          "We focus on building high-quality backlinks from reputable websites to enhance your website's authority and credibility.",
      },
    ],
  },
  {
    id: 7,
    name: "Software Development",
    slug: "software-development",
    summary: "Custom software solutions tailored to your needs.",
    content: `
      <h1 class="text-5xl font-extrabold dark:text-darkTextMain my-6">The Future of Web Development</h1>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        Web development has come a long way from its early days of static HTML pages. With the advent of JavaScript and CSS, developers were able to create more interactive and dynamic web applications. Today, technologies like React and Vue.js are pushing the boundaries of what can be achieved on the web, enabling developers to build highly responsive and scalable applications.
      </p>
      <h3 class="text-3xl font-bold dark:text-darkTextMain my-6">The Rise of JavaScript Frameworks</h3>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        JavaScript frameworks like React, Angular, and Vue.js have become integral to modern web development. React, developed by Facebook, is known for its component-based architecture, which allows developers to build reusable UI components. Angular, maintained by Google, offers a full-fledged framework with powerful tools for building complex applications. Vue.js is a progressive framework that provides a balance between ease of use and advanced features.
      </p>
      <div class="relative my-8"><img src="/images/blog/660x660.webp" alt="JavaScript Frameworks" class="w-full md:h-[500px] object-cover cursor-pointer rounded-lg my-8"/></div>
      <h3 class="text-3xl font-bold dark:text-darkTextMain my-6">Serverless Architectures</h3>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        Serverless architectures are gaining popularity as they simplify application deployment and management. Instead of managing servers, developers can focus on writing code while the cloud provider handles the infrastructure. Services like AWS Lambda, Google Cloud Functions, and Azure Functions offer scalable compute resources on demand, making it easier to build and deploy applications quickly.
      </p>
      <blockquote class="p-4 my-8 border-s-4 border-gray-300 bg-gray-50 dark:bg-darkBgMain dark:border-darkBorder">
        <p class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-darkTextChild">
          “Serverless computing allows developers to focus on writing code without worrying about the underlying infrastructure.” - Anonymous
        </p>
      </blockquote>
      <h3 class="text-3xl font-bold dark:text-darkTextMain my-6">The Importance of User Experience (UX)</h3>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        User experience (UX) plays a crucial role in web development. A well-designed UX ensures that users can navigate and interact with applications seamlessly. Modern web development practices emphasize responsive design, fast load times, and intuitive interfaces. Tools like Figma and Adobe XD are widely used for designing and prototyping user interfaces, while performance optimization techniques help ensure a smooth user experience.
      </p>
      <h5 class="text-xl font-bold dark:text-darkTextMain my-6">Future Trends in Web Development</h5>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        Looking ahead, several trends are likely to shape the future of web development. Artificial Intelligence (AI) and Machine Learning (ML) will become increasingly integrated into web applications, offering personalized experiences and advanced analytics. Progressive Web Apps (PWAs) will continue to bridge the gap between web and mobile applications, providing offline capabilities and improved performance.
      </p>
      <ul class="max-w-md space-y-2 text-gray-500 list-disc list-inside dark:text-darkTextChild my-6">
        <li>AI and ML integration for smarter applications</li>
        <li>Progressive Web Apps for a seamless experience</li>
        <li>Enhanced performance optimization techniques</li>
        <li>Increased focus on security and data privacy</li>
      </ul>
      <hr class="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700"/>
      <pre class="bg-gray-100 dark:bg-darkBgChild p-4 rounded-lg my-6 overflow-x-auto"><code class="text-gray-900 dark:text-darkTextMain">const add = (a, b) => a + b;
console.log(add(2, 3));</code></pre>
      <a href="https://example.com" class="text-blue-500 hover:underline my-6 dark:text-darkHref" rel="noopener noreferrer">Visit Example</a>
      
      <div class="relative overflow-x-auto my-6">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-darkTextChild">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-darkBgChild dark:text-darkTextMain">
            <tr>
              <th scope="col" class="px-6 py-3">Product name</th>
              <th scope="col" class="px-6 py-3">Color</th>
              <th scope="col" class="px-6 py-3">Category</th>
              <th scope="col" class="px-6 py-3">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-darkBgMain dark:border-gray-700">
              <td class="px-6 py-4">Apple MacBook Pro 17</td>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">$2999</td>
            </tr>
            <tr class="bg-white border-b dark:bg-darkBgMain dark:border-gray-700">
              <td class="px-6 py-4">Microsoft Surface Pro</td>
              <td class="px-6 py-4">White</td>
              <td class="px-6 py-4">Tablet</td>
              <td class="px-6 py-4">$1999</td>
            </tr>
            <tr class="bg-white border-b dark:bg-darkBgMain dark:border-gray-700">
              <td class="px-6 py-4">Magic Mouse 2</td>
              <td class="px-6 py-4">Black</td>
              <td class="px-6 py-4">Accessories</td>
              <td class="px-6 py-4">$99</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        In summary, the future of web development is exciting and full of opportunities. By staying abreast of emerging technologies and trends, developers can build innovative applications that meet the evolving needs of users and leverage the latest advancements in the field.
      </p>
      <ol class="space-y-4 text-gray-500 list-decimal list-inside dark:text-darkTextChild my-6">
        <li>JavaScript frameworks are essential for modern web development.
          <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
            <li>React</li>
            <li>Angular</li>
            <li>Vue.js</li>
          </ul>
        </li>
        <li>Serverless architectures offer many benefits, such as:
          <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
            <li>Reduced server management</li>
            <li>Scalability</li>
            <li>Cost efficiency</li>
          </ul>
        </li>
      </ol>
    `,
    image: "/images/services/328x240.webp",
    isPricing: true,
    isFaqs: true,
    pricing: [
      {
        title: "Basic",
        price: 74,
        color1: "from-green-500",
        color2: "to-green-300",
        color3: "bg-green-500",
        color4: "text-green-500",
        description:
          "Feature-rich e-commerce store with advanced functionalities.",
        included: [
          "Basic design and functionality",
          "Limited customization options",
          "Basic testing and deployment",
        ],
      },
      {
        title: "Standard",
        price: 94,
        color1: "from-blue-500",
        color2: "to-blue-300",
        color3: "bg-blue-500",
        color4: "text-blue-500",
        description:
          "Feature-rich software application with advanced functionalities.",
        included: [
          "Custom design and user interface",
          "Advanced customization options",
          "Thorough testing and deployment",
        ],
      },
      {
        title: "Advanced",
        price: 114,
        color1: "from-pink-500",
        color2: "to-pink-300",
        color3: "bg-pink-500",
        color4: "text-pink-500",
        description:
          "Highly customized software application with enterprise-level features.",
        included: [
          "Seamless integration with other systems",
          "Scalable architecture",
          "Dedicated support and maintenance",
        ],
      },
    ],
    faqs: [
      {
        question: "What software development methodologies do you use?",
        answer:
          "We primarily use agile methodologies like Scrum and Kanban to ensure flexibility and collaboration.",
      },
      {
        question:
          "What programming languages and technologies are you proficient in?",
        answer:
          "Our team has expertise in a wide range of languages and technologies, including Java, Python, .NET, React, Angular, and more.",
      },
      {
        question:
          "Do you offer ongoing support and maintenance for the software?",
        answer:
          "Yes, we offer ongoing support and maintenance packages to ensure your software runs smoothly and is up-to-date.",
      },
      {
        question: "How do you ensure the quality of the software?",
        answer:
          "We have a rigorous testing process and quality assurance measures in place to ensure the software meets your requirements and is bug-free.",
      },
      {
        question:
          "What is your approach to software design and user experience?",
        answer:
          "We focus on creating intuitive, user-friendly software with a focus on functionality and usability.",
      },
    ],
  },
  {
    id: 8,
    name: "Data Analytics & Reporting",
    slug: "data-analytics-and-reporting",
    summary: "Extract insights from your data and make informed decisions.",
    content: `
      <h1 class="text-5xl font-extrabold dark:text-darkTextMain my-6">The Future of Web Development</h1>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        Web development has come a long way from its early days of static HTML pages. With the advent of JavaScript and CSS, developers were able to create more interactive and dynamic web applications. Today, technologies like React and Vue.js are pushing the boundaries of what can be achieved on the web, enabling developers to build highly responsive and scalable applications.
      </p>
      <h3 class="text-3xl font-bold dark:text-darkTextMain my-6">The Rise of JavaScript Frameworks</h3>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        JavaScript frameworks like React, Angular, and Vue.js have become integral to modern web development. React, developed by Facebook, is known for its component-based architecture, which allows developers to build reusable UI components. Angular, maintained by Google, offers a full-fledged framework with powerful tools for building complex applications. Vue.js is a progressive framework that provides a balance between ease of use and advanced features.
      </p>
      <div class="relative my-8"><img src="/images/blog/660x660.webp" alt="JavaScript Frameworks" class="w-full md:h-[500px] object-cover cursor-pointer rounded-lg my-8"/></div>
      <h3 class="text-3xl font-bold dark:text-darkTextMain my-6">Serverless Architectures</h3>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        Serverless architectures are gaining popularity as they simplify application deployment and management. Instead of managing servers, developers can focus on writing code while the cloud provider handles the infrastructure. Services like AWS Lambda, Google Cloud Functions, and Azure Functions offer scalable compute resources on demand, making it easier to build and deploy applications quickly.
      </p>
      <blockquote class="p-4 my-8 border-s-4 border-gray-300 bg-gray-50 dark:bg-darkBgMain dark:border-darkBorder">
        <p class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-darkTextChild">
          “Serverless computing allows developers to focus on writing code without worrying about the underlying infrastructure.” - Anonymous
        </p>
      </blockquote>
      <h3 class="text-3xl font-bold dark:text-darkTextMain my-6">The Importance of User Experience (UX)</h3>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        User experience (UX) plays a crucial role in web development. A well-designed UX ensures that users can navigate and interact with applications seamlessly. Modern web development practices emphasize responsive design, fast load times, and intuitive interfaces. Tools like Figma and Adobe XD are widely used for designing and prototyping user interfaces, while performance optimization techniques help ensure a smooth user experience.
      </p>
      <h5 class="text-xl font-bold dark:text-darkTextMain my-6">Future Trends in Web Development</h5>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        Looking ahead, several trends are likely to shape the future of web development. Artificial Intelligence (AI) and Machine Learning (ML) will become increasingly integrated into web applications, offering personalized experiences and advanced analytics. Progressive Web Apps (PWAs) will continue to bridge the gap between web and mobile applications, providing offline capabilities and improved performance.
      </p>
      <ul class="max-w-md space-y-2 text-gray-500 list-disc list-inside dark:text-darkTextChild my-6">
        <li>AI and ML integration for smarter applications</li>
        <li>Progressive Web Apps for a seamless experience</li>
        <li>Enhanced performance optimization techniques</li>
        <li>Increased focus on security and data privacy</li>
      </ul>
      <hr class="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700"/>
      <pre class="bg-gray-100 dark:bg-darkBgChild p-4 rounded-lg my-6 overflow-x-auto"><code class="text-gray-900 dark:text-darkTextMain">const add = (a, b) => a + b;
console.log(add(2, 3));</code></pre>
      <a href="https://example.com" class="text-blue-500 hover:underline my-6 dark:text-darkHref" rel="noopener noreferrer">Visit Example</a>
       
      <div class="relative overflow-x-auto my-6">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-darkTextChild">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-darkBgChild dark:text-darkTextMain">
            <tr>
              <th scope="col" class="px-6 py-3">Product name</th>
              <th scope="col" class="px-6 py-3">Color</th>
              <th scope="col" class="px-6 py-3">Category</th>
              <th scope="col" class="px-6 py-3">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-darkBgMain dark:border-gray-700">
              <td class="px-6 py-4">Apple MacBook Pro 17</td>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">$2999</td>
            </tr>
            <tr class="bg-white border-b dark:bg-darkBgMain dark:border-gray-700">
              <td class="px-6 py-4">Microsoft Surface Pro</td>
              <td class="px-6 py-4">White</td>
              <td class="px-6 py-4">Tablet</td>
              <td class="px-6 py-4">$1999</td>
            </tr>
            <tr class="bg-white border-b dark:bg-darkBgMain dark:border-gray-700">
              <td class="px-6 py-4">Magic Mouse 2</td>
              <td class="px-6 py-4">Black</td>
              <td class="px-6 py-4">Accessories</td>
              <td class="px-6 py-4">$99</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        In summary, the future of web development is exciting and full of opportunities. By staying abreast of emerging technologies and trends, developers can build innovative applications that meet the evolving needs of users and leverage the latest advancements in the field.
      </p>
      <ol class="space-y-4 text-gray-500 list-decimal list-inside dark:text-darkTextChild my-6">
        <li>JavaScript frameworks are essential for modern web development.
          <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
            <li>React</li>
            <li>Angular</li>
            <li>Vue.js</li>
          </ul>
        </li>
        <li>Serverless architectures offer many benefits, such as:
          <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
            <li>Reduced server management</li>
            <li>Scalability</li>
            <li>Cost efficiency</li>
          </ul>
        </li>
      </ol>
    `,
    image: "/images/services/328x240.webp",
    isPricing: true,
    isFaqs: true,
    pricing: [
      {
        title: "Basic",
        price: 84,
        color1: "from-green-500",
        color2: "to-green-300",
        color3: "bg-green-500",
        color4: "text-green-500",
        description:
          "Basic data analysis and reporting services for small businesses.",
        included: [
          "Data collection and integration",
          "Basic data cleaning and transformation",
          "Simple data visualization",
        ],
      },
      {
        title: "Standard",
        price: 104,
        color1: "from-blue-500",
        color2: "to-blue-300",
        color3: "bg-blue-500",
        color4: "text-blue-500",
        description:
          "Comprehensive data analytics and reporting services for mid-sized businesses.",
        included: [
          "Advanced data analysis techniques",
          "Custom data visualization",
          "Regular reporting and insights",
        ],
      },
      {
        title: "Advanced",
        price: 124,
        color1: "from-pink-500",
        color2: "to-pink-300",
        color3: "bg-pink-500",
        color4: "text-pink-500",
        description:
          "High-level data analytics and reporting services for large enterprises.",
        included: [
          "Big data analytics and machine learning",
          "Predictive modeling and forecasting",
          "Data governance and security",
        ],
      },
    ],
    faqs: [
      {
        question: "What types of data can you analyze?",
        answer:
          "We can analyze a wide variety of data, including structured data from databases, spreadsheets, and APIs, as well as unstructured data from social media, web pages, and other sources.",
      },
      {
        question: "What analytics techniques do you use?",
        answer:
          "We use a range of techniques, including statistical modeling, machine learning, data mining, and more, depending on your specific needs.",
      },
      {
        question: "How do you ensure data security and privacy?",
        answer:
          "We adhere to strict data security and privacy protocols to protect your data and comply with relevant regulations.",
      },
      {
        question: "What is your approach to data visualization?",
        answer:
          "We create clear and compelling visualizations to help you understand trends, patterns, and insights from your data.",
      },
      {
        question: "Do you offer ongoing data analysis and reporting services?",
        answer:
          "Yes, we offer ongoing data analysis and reporting services to keep you informed about your data and its implications for your business.",
      },
    ],
  },
  {
    id: 9,
    name: "Cloud Computing Solutions",
    slug: "cloud-computing-solutions",
    summary: "Migrate and manage your IT infrastructure in the cloud.",
    content: `
      <h1 class="text-5xl font-extrabold dark:text-darkTextMain my-6">The Future of Web Development</h1>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        Web development has come a long way from its early days of static HTML pages. With the advent of JavaScript and CSS, developers were able to create more interactive and dynamic web applications. Today, technologies like React and Vue.js are pushing the boundaries of what can be achieved on the web, enabling developers to build highly responsive and scalable applications.
      </p>
      <h3 class="text-3xl font-bold dark:text-darkTextMain my-6">The Rise of JavaScript Frameworks</h3>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        JavaScript frameworks like React, Angular, and Vue.js have become integral to modern web development. React, developed by Facebook, is known for its component-based architecture, which allows developers to build reusable UI components. Angular, maintained by Google, offers a full-fledged framework with powerful tools for building complex applications. Vue.js is a progressive framework that provides a balance between ease of use and advanced features.
      </p>
      <div class="relative my-8"><img src="/images/blog/660x660.webp" alt="JavaScript Frameworks" class="w-full md:h-[500px] object-cover cursor-pointer rounded-lg my-8"/></div>
      <h3 class="text-3xl font-bold dark:text-darkTextMain my-6">Serverless Architectures</h3>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        Serverless architectures are gaining popularity as they simplify application deployment and management. Instead of managing servers, developers can focus on writing code while the cloud provider handles the infrastructure. Services like AWS Lambda, Google Cloud Functions, and Azure Functions offer scalable compute resources on demand, making it easier to build and deploy applications quickly.
      </p>
      <blockquote class="p-4 my-8 border-s-4 border-gray-300 bg-gray-50 dark:bg-darkBgMain dark:border-darkBorder">
        <p class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-darkTextChild">
          “Serverless computing allows developers to focus on writing code without worrying about the underlying infrastructure.” - Anonymous
        </p>
      </blockquote>
      <h3 class="text-3xl font-bold dark:text-darkTextMain my-6">The Importance of User Experience (UX)</h3>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        User experience (UX) plays a crucial role in web development. A well-designed UX ensures that users can navigate and interact with applications seamlessly. Modern web development practices emphasize responsive design, fast load times, and intuitive interfaces. Tools like Figma and Adobe XD are widely used for designing and prototyping user interfaces, while performance optimization techniques help ensure a smooth user experience.
      </p>
      <h5 class="text-xl font-bold dark:text-darkTextMain my-6">Future Trends in Web Development</h5>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        Looking ahead, several trends are likely to shape the future of web development. Artificial Intelligence (AI) and Machine Learning (ML) will become increasingly integrated into web applications, offering personalized experiences and advanced analytics. Progressive Web Apps (PWAs) will continue to bridge the gap between web and mobile applications, providing offline capabilities and improved performance.
      </p>
      <ul class="max-w-md space-y-2 text-gray-500 list-disc list-inside dark:text-darkTextChild my-6">
        <li>AI and ML integration for smarter applications</li>
        <li>Progressive Web Apps for a seamless experience</li>
        <li>Enhanced performance optimization techniques</li>
        <li>Increased focus on security and data privacy</li>
      </ul>
      <hr class="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700"/>
      <pre class="bg-gray-100 dark:bg-darkBgChild p-4 rounded-lg my-6 overflow-x-auto"><code class="text-gray-900 dark:text-darkTextMain">const add = (a, b) => a + b;
console.log(add(2, 3));</code></pre>
      <a href="https://example.com" class="text-blue-500 hover:underline my-6 dark:text-darkHref" rel="noopener noreferrer">Visit Example</a>
       
      <div class="relative overflow-x-auto my-6">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-darkTextChild">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-darkBgChild dark:text-darkTextMain">
            <tr>
              <th scope="col" class="px-6 py-3">Product name</th>
              <th scope="col" class="px-6 py-3">Color</th>
              <th scope="col" class="px-6 py-3">Category</th>
              <th scope="col" class="px-6 py-3">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-darkBgMain dark:border-gray-700">
              <td class="px-6 py-4">Apple MacBook Pro 17</td>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">$2999</td>
            </tr>
            <tr class="bg-white border-b dark:bg-darkBgMain dark:border-gray-700">
              <td class="px-6 py-4">Microsoft Surface Pro</td>
              <td class="px-6 py-4">White</td>
              <td class="px-6 py-4">Tablet</td>
              <td class="px-6 py-4">$1999</td>
            </tr>
            <tr class="bg-white border-b dark:bg-darkBgMain dark:border-gray-700">
              <td class="px-6 py-4">Magic Mouse 2</td>
              <td class="px-6 py-4">Black</td>
              <td class="px-6 py-4">Accessories</td>
              <td class="px-6 py-4">$99</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        In summary, the future of web development is exciting and full of opportunities. By staying abreast of emerging technologies and trends, developers can build innovative applications that meet the evolving needs of users and leverage the latest advancements in the field.
      </p>
      <ol class="space-y-4 text-gray-500 list-decimal list-inside dark:text-darkTextChild my-6">
        <li>JavaScript frameworks are essential for modern web development.
          <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
            <li>React</li>
            <li>Angular</li>
            <li>Vue.js</li>
          </ul>
        </li>
        <li>Serverless architectures offer many benefits, such as:
          <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
            <li>Reduced server management</li>
            <li>Scalability</li>
            <li>Cost efficiency</li>
          </ul>
        </li>
      </ol>
    `,
    image: "/images/services/328x240.webp",
    isPricing: true,
    isFaqs: true,
    pricing: [
      {
        title: "Basic",
        price: 94,
        color1: "from-green-500",
        color2: "to-green-300",
        color3: "bg-green-500",
        color4: "text-green-500",
        description:
          "Feature-rich e-commerce store with advanced functionalities.",
        included: [
          "Cloud migration assessment",
          "Basic cloud infrastructure setup",
          "Limited monitoring and support",
        ],
      },
      {
        title: "Standard",
        price: 114,
        color1: "from-blue-500",
        color2: "to-blue-300",
        color3: "bg-blue-500",
        color4: "text-blue-500",
        description:
          "Feature-rich e-commerce store with advanced functionalities.",
        included: [
          "Full cloud migration services",
          "Advanced cloud infrastructure management",
          "Enhanced monitoring and support",
        ],
      },
      {
        title: "Advanced",
        price: 134,
        color1: "from-pink-500",
        color2: "to-pink-300",
        color3: "bg-pink-500",
        color4: "text-pink-500",
        description:
          "High-level cloud computing solutions with specialized services.",
        included: [
          "Cloud security and compliance audits",
          "DevOps and automation implementation",
          "Dedicated cloud experts",
        ],
      },
    ],
    faqs: [
      {
        question: "What cloud platforms do you support?",
        answer:
          "We support major cloud platforms, including AWS, Azure, and Google Cloud.",
      },
      {
        question: "What is your approach to cloud migration?",
        answer:
          "We follow a structured and phased approach to cloud migration, ensuring a smooth transition with minimal downtime and data loss.",
      },
      {
        question: "How do you ensure cloud security?",
        answer:
          "We implement robust security measures, including data encryption, access control, and regular security audits.",
      },
      {
        question: "Do you offer ongoing cloud management services?",
        answer:
          "Yes, we offer ongoing cloud management services to optimize your cloud environment for performance, scalability, and cost efficiency.",
      },
      {
        question: "What are your cloud security certifications?",
        answer:
          "Our team is certified in relevant cloud security certifications, such as AWS Certified Solutions Architect and Azure Security Engineer.",
      },
    ],
  },
  {
    id: 10,
    name: "Cybersecurity Services",
    slug: "cybersecurity-services",
    summary: "Protect your business from cyber threats.",
    content: `
      <h1 class="text-5xl font-extrabold dark:text-darkTextMain my-6">The Future of Web Development</h1>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        Web development has come a long way from its early days of static HTML pages. With the advent of JavaScript and CSS, developers were able to create more interactive and dynamic web applications. Today, technologies like React and Vue.js are pushing the boundaries of what can be achieved on the web, enabling developers to build highly responsive and scalable applications.
      </p>
      <h3 class="text-3xl font-bold dark:text-darkTextMain my-6">The Rise of JavaScript Frameworks</h3>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        JavaScript frameworks like React, Angular, and Vue.js have become integral to modern web development. React, developed by Facebook, is known for its component-based architecture, which allows developers to build reusable UI components. Angular, maintained by Google, offers a full-fledged framework with powerful tools for building complex applications. Vue.js is a progressive framework that provides a balance between ease of use and advanced features.
      </p>
      <div class="relative my-8"><img src="/images/blog/660x660.webp" alt="JavaScript Frameworks" class="w-full md:h-[500px] object-cover cursor-pointer rounded-lg my-8"/></div>
      <h3 class="text-3xl font-bold dark:text-darkTextMain my-6">Serverless Architectures</h3>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        Serverless architectures are gaining popularity as they simplify application deployment and management. Instead of managing servers, developers can focus on writing code while the cloud provider handles the infrastructure. Services like AWS Lambda, Google Cloud Functions, and Azure Functions offer scalable compute resources on demand, making it easier to build and deploy applications quickly.
      </p>
      <blockquote class="p-4 my-8 border-s-4 border-gray-300 bg-gray-50 dark:bg-darkBgMain dark:border-darkBorder">
        <p class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-darkTextChild">
          “Serverless computing allows developers to focus on writing code without worrying about the underlying infrastructure.” - Anonymous
        </p>
      </blockquote>
      <h3 class="text-3xl font-bold dark:text-darkTextMain my-6">The Importance of User Experience (UX)</h3>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        User experience (UX) plays a crucial role in web development. A well-designed UX ensures that users can navigate and interact with applications seamlessly. Modern web development practices emphasize responsive design, fast load times, and intuitive interfaces. Tools like Figma and Adobe XD are widely used for designing and prototyping user interfaces, while performance optimization techniques help ensure a smooth user experience.
      </p>
      <h5 class="text-xl font-bold dark:text-darkTextMain my-6">Future Trends in Web Development</h5>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        Looking ahead, several trends are likely to shape the future of web development. Artificial Intelligence (AI) and Machine Learning (ML) will become increasingly integrated into web applications, offering personalized experiences and advanced analytics. Progressive Web Apps (PWAs) will continue to bridge the gap between web and mobile applications, providing offline capabilities and improved performance.
      </p>
      <ul class="max-w-md space-y-2 text-gray-500 list-disc list-inside dark:text-darkTextChild my-6">
        <li>AI and ML integration for smarter applications</li>
        <li>Progressive Web Apps for a seamless experience</li>
        <li>Enhanced performance optimization techniques</li>
        <li>Increased focus on security and data privacy</li>
      </ul>
      <hr class="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700"/>
      <pre class="bg-gray-100 dark:bg-darkBgChild p-4 rounded-lg my-6 overflow-x-auto"><code class="text-gray-900 dark:text-darkTextMain">const add = (a, b) => a + b;
console.log(add(2, 3));</code></pre>
      <a href="https://example.com" class="text-blue-500 hover:underline my-6 dark:text-darkHref" rel="noopener noreferrer">Visit Example</a>
      
      <div class="relative overflow-x-auto my-6">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-darkTextChild">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-darkBgChild dark:text-darkTextMain">
            <tr>
              <th scope="col" class="px-6 py-3">Product name</th>
              <th scope="col" class="px-6 py-3">Color</th>
              <th scope="col" class="px-6 py-3">Category</th>
              <th scope="col" class="px-6 py-3">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-darkBgMain dark:border-gray-700">
              <td class="px-6 py-4">Apple MacBook Pro 17</td>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">$2999</td>
            </tr>
            <tr class="bg-white border-b dark:bg-darkBgMain dark:border-gray-700">
              <td class="px-6 py-4">Microsoft Surface Pro</td>
              <td class="px-6 py-4">White</td>
              <td class="px-6 py-4">Tablet</td>
              <td class="px-6 py-4">$1999</td>
            </tr>
            <tr class="bg-white border-b dark:bg-darkBgMain dark:border-gray-700">
              <td class="px-6 py-4">Magic Mouse 2</td>
              <td class="px-6 py-4">Black</td>
              <td class="px-6 py-4">Accessories</td>
              <td class="px-6 py-4">$99</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        In summary, the future of web development is exciting and full of opportunities. By staying abreast of emerging technologies and trends, developers can build innovative applications that meet the evolving needs of users and leverage the latest advancements in the field.
      </p>
      <ol class="space-y-4 text-gray-500 list-decimal list-inside dark:text-darkTextChild my-6">
        <li>JavaScript frameworks are essential for modern web development.
          <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
            <li>React</li>
            <li>Angular</li>
            <li>Vue.js</li>
          </ul>
        </li>
        <li>Serverless architectures offer many benefits, such as:
          <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
            <li>Reduced server management</li>
            <li>Scalability</li>
            <li>Cost efficiency</li>
          </ul>
        </li>
      </ol>
    `,
    image: "/images/services/328x240.webp",
    isPricing: true,
    isFaqs: true,
    pricing: [
      {
        title: "Basic",
        price: 104,
        color1: "from-green-500",
        color2: "to-green-300",
        color3: "bg-green-500",
        color4: "text-green-500",
        description:
          "Feature-rich e-commerce store with advanced functionalities.",
        included: [
          "Vulnerability assessment",
          "Basic security awareness training",
          "Limited incident response support",
        ],
      },
      {
        title: "Standard",
        price: 124,
        color1: "from-blue-500",
        color2: "to-blue-300",
        color3: "bg-blue-500",
        color4: "text-blue-500",
        description:
          "Comprehensive cybersecurity services for mid-sized businesses.",
        included: [
          "Penetration testing",
          "Advanced security awareness training",
          "Enhanced incident response capabilities",
        ],
      },
      {
        title: "Advanced",
        price: 144,
        color1: "from-pink-500",
        color2: "to-pink-300",
        color3: "bg-pink-500",
        color4: "text-pink-500",
        description:
          "Feature-rich e-commerce store with advanced functionalities.",
        included: [
          "Security audits and compliance assessments",
          "Managed security services",
          "Dedicated cybersecurity experts",
        ],
      },
    ],
    faqs: [
      {
        question: "What types of cybersecurity services do you offer?",
        answer:
          "We offer a wide range of services, including vulnerability assessment, penetration testing, security awareness training, incident response, and more.",
      },
      {
        question:
          "How do you conduct vulnerability assessments and penetration testing?",
        answer:
          "We use industry-standard tools and techniques to scan your systems and applications for vulnerabilities and attempt to exploit them to identify security weaknesses.",
      },
      {
        question: "What is your approach to security awareness training?",
        answer:
          "We provide interactive and engaging training to educate your employees about cyber threats, best practices, and how to respond to suspicious activities.",
      },
      {
        question: "How do you handle security incidents?",
        answer:
          "We have a rapid incident response plan to contain the damage, investigate the cause, and restore your systems to a secure state.",
      },
      {
        question: "What cybersecurity certifications do you hold?",
        answer:
          "Our team holds relevant cybersecurity certifications, such as CISSP, CISM, and CEH, to ensure expertise in security practices.",
      },
    ],
  },
  {
    id: 11,
    name: "UI/UX Design",
    slug: "uiux-design",
    summary: "Create intuitive and visually stunning user interfaces.",
    content: `
      <h1 class="text-5xl font-extrabold dark:text-darkTextMain my-6">The Future of Web Development</h1>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        Web development has come a long way from its early days of static HTML pages. With the advent of JavaScript and CSS, developers were able to create more interactive and dynamic web applications. Today, technologies like React and Vue.js are pushing the boundaries of what can be achieved on the web, enabling developers to build highly responsive and scalable applications.
      </p>
      <h3 class="text-3xl font-bold dark:text-darkTextMain my-6">The Rise of JavaScript Frameworks</h3>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        JavaScript frameworks like React, Angular, and Vue.js have become integral to modern web development. React, developed by Facebook, is known for its component-based architecture, which allows developers to build reusable UI components. Angular, maintained by Google, offers a full-fledged framework with powerful tools for building complex applications. Vue.js is a progressive framework that provides a balance between ease of use and advanced features.
      </p>
      <div class="relative my-8"><img src="/images/blog/660x660.webp" alt="JavaScript Frameworks" class="w-full md:h-[500px] object-cover cursor-pointer rounded-lg my-8"/></div>
      <h3 class="text-3xl font-bold dark:text-darkTextMain my-6">Serverless Architectures</h3>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        Serverless architectures are gaining popularity as they simplify application deployment and management. Instead of managing servers, developers can focus on writing code while the cloud provider handles the infrastructure. Services like AWS Lambda, Google Cloud Functions, and Azure Functions offer scalable compute resources on demand, making it easier to build and deploy applications quickly.
      </p>
      <blockquote class="p-4 my-8 border-s-4 border-gray-300 bg-gray-50 dark:bg-darkBgMain dark:border-darkBorder">
        <p class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-darkTextChild">
          “Serverless computing allows developers to focus on writing code without worrying about the underlying infrastructure.” - Anonymous
        </p>
      </blockquote>
      <h3 class="text-3xl font-bold dark:text-darkTextMain my-6">The Importance of User Experience (UX)</h3>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        User experience (UX) plays a crucial role in web development. A well-designed UX ensures that users can navigate and interact with applications seamlessly. Modern web development practices emphasize responsive design, fast load times, and intuitive interfaces. Tools like Figma and Adobe XD are widely used for designing and prototyping user interfaces, while performance optimization techniques help ensure a smooth user experience.
      </p>
      <h5 class="text-xl font-bold dark:text-darkTextMain my-6">Future Trends in Web Development</h5>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        Looking ahead, several trends are likely to shape the future of web development. Artificial Intelligence (AI) and Machine Learning (ML) will become increasingly integrated into web applications, offering personalized experiences and advanced analytics. Progressive Web Apps (PWAs) will continue to bridge the gap between web and mobile applications, providing offline capabilities and improved performance.
      </p>
      <ul class="max-w-md space-y-2 text-gray-500 list-disc list-inside dark:text-darkTextChild my-6">
        <li>AI and ML integration for smarter applications</li>
        <li>Progressive Web Apps for a seamless experience</li>
        <li>Enhanced performance optimization techniques</li>
        <li>Increased focus on security and data privacy</li>
      </ul>
      <hr class="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700"/>
      <pre class="bg-gray-100 dark:bg-darkBgChild p-4 rounded-lg my-6 overflow-x-auto"><code class="text-gray-900 dark:text-darkTextMain">const add = (a, b) => a + b;
console.log(add(2, 3));</code></pre>
      <a href="https://example.com" class="text-blue-500 hover:underline my-6 dark:text-darkHref" rel="noopener noreferrer">Visit Example</a>
       
      <div class="relative overflow-x-auto my-6">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-darkTextChild">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-darkBgChild dark:text-darkTextMain">
            <tr>
              <th scope="col" class="px-6 py-3">Product name</th>
              <th scope="col" class="px-6 py-3">Color</th>
              <th scope="col" class="px-6 py-3">Category</th>
              <th scope="col" class="px-6 py-3">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-darkBgMain dark:border-gray-700">
              <td class="px-6 py-4">Apple MacBook Pro 17</td>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">$2999</td>
            </tr>
            <tr class="bg-white border-b dark:bg-darkBgMain dark:border-gray-700">
              <td class="px-6 py-4">Microsoft Surface Pro</td>
              <td class="px-6 py-4">White</td>
              <td class="px-6 py-4">Tablet</td>
              <td class="px-6 py-4">$1999</td>
            </tr>
            <tr class="bg-white border-b dark:bg-darkBgMain dark:border-gray-700">
              <td class="px-6 py-4">Magic Mouse 2</td>
              <td class="px-6 py-4">Black</td>
              <td class="px-6 py-4">Accessories</td>
              <td class="px-6 py-4">$99</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-gray-500 mt-6 mb-6 leading-7 dark:text-darkTextChild">
        In summary, the future of web development is exciting and full of opportunities. By staying abreast of emerging technologies and trends, developers can build innovative applications that meet the evolving needs of users and leverage the latest advancements in the field.
      </p>
      <ol class="space-y-4 text-gray-500 list-decimal list-inside dark:text-darkTextChild my-6">
        <li>JavaScript frameworks are essential for modern web development.
          <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
            <li>React</li>
            <li>Angular</li>
            <li>Vue.js</li>
          </ul>
        </li>
        <li>Serverless architectures offer many benefits, such as:
          <ul class="ps-5 mt-2 space-y-2 list-disc list-inside">
            <li>Reduced server management</li>
            <li>Scalability</li>
            <li>Cost efficiency</li>
          </ul>
        </li>
      </ol>
    `,
    image: "/images/services/328x240.webp",
    isPricing: true,
    isFaqs: true,
    pricing: [
      {
        title: "Basic",
        price: 114,
        color1: "from-green-500",
        color2: "to-green-300",
        color3: "bg-green-500",
        color4: "text-green-500",
        description:
          "Feature-rich e-commerce store with advanced functionalities.",
        included: [
          "User research and persona development",
          "Basic wireframing and prototyping",
          "Limited visual design",
        ],
      },
      {
        title: "Standard",
        price: 134,
        color1: "from-blue-500",
        color2: "to-blue-300",
        color3: "bg-blue-500",
        color4: "text-blue-500",
        description:
          "Comprehensive UI/UX design services for medium-sized projects.",
        included: [
          "In-depth user research and analysis",
          "Detailed wireframing and prototyping",
          "Comprehensive visual design",
        ],
      },
      {
        title: "Advanced",
        price: 154,
        color1: "from-pink-500",
        color2: "to-pink-300",
        color3: "bg-pink-500",
        color4: "text-pink-500",
        description:
          "Feature-rich e-commerce store with advanced functionalities.",
        included: [
          "User experience strategy",
          "Interactive design and animations",
          "Accessibility and usability testing",
        ],
      },
    ],
    faqs: [
      {
        question: "What UI/UX design tools do you use?",
        answer:
          "We use industry-standard tools like Figma, Adobe XD, and Sketch to create intuitive and visually appealing user interfaces.",
      },
      {
        question: "How do you conduct user research?",
        answer:
          "We employ various user research methods, including user interviews, surveys, and usability testing, to understand your target audience.",
      },
      {
        question: "What is your design process?",
        answer:
          "Our design process involves user research, information architecture, wireframing, visual design, and prototyping to create a user-centered design.",
      },
      {
        question: "Do you offer UI/UX design for mobile apps?",
        answer:
          "Yes, we offer UI/UX design for mobile apps, ensuring a seamless and engaging experience across different devices.",
      },
      {
        question: "What is your approach to accessibility and inclusivity?",
        answer:
          "We prioritize accessibility and inclusivity in our designs to ensure that everyone can access and use your product or service.",
      },
    ],
  },
];

export default services;