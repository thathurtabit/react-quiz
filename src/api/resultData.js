const resultData = {
  DAIS: {
    title: 'People Watcher',
    text: '<strong>You’re fascinated by people,</strong> endlessly curious about what they do and why they do it, trying to work out what makes them tick. Through your natural empathy for others, you’re able to work out what people want and need, and then propose lots of new ways to help them lead more productive and fulfilling lives.',
    slug: 'people-watcher',
    similars: ['DAGS', 'DAIM', 'CAIS', 'DRIS'],
    opposite: 'CRGM'
  },
  DAIM: {
    title: 'Number Cruncher',
    text: '<strong>You can imagine scenarios that others can’t yet picture,</strong> taking the first steps towards describing a better way to do something.  Your attention to detail is immaculate, allowing you to suggest multiple solutions, each with a clear understanding of potential impact and likelihood of success.',
    slug: 'number-cruncher',
    similars: ['CAIM', 'DRIM', 'DAGM', 'DAIS'],
    opposite: 'CRGS'
  },
  CAIM: {
    title: 'Planner',
    text: '<strong>When the details are still fuzzy, you’re great at making a plan</strong> that people can understand and implement.  Without getting too close to a final solution, you’re able to set the boundaries for a project so that everyone on the team knows what to do and can pull in the same direction.',
    slug: 'planner',
    similars: ['DAIM', 'CRIM', 'CAGM', 'CAIS'],
    opposite: 'DRGS'
  },
  CAIS: {
    title: 'Brand Builder',
    text: '<strong>You know that it’s the little details that count</strong> when it comes to delivering great experiences for people, so you take the time to work out how every element adds up to tell a coherent story.  There’s real craft in your work and nothing is left to chance.',
    slug: 'brand-builder',
    similars: ['DAIS', 'CRIS', 'CAGS', 'CAIM'],
    opposite: 'DRGM'
  },
  DAGS: {
    title: 'Party Animal',
    text: '<strong>You’re a people person through and through -</strong> both in looking for problems that people have and working with others to come up with many possible solutions.  You can easily imagine a better future and then love to discuss how to make this a reality.',
    slug: 'party-animal',
    similars: ['CAGS', 'DRGS', 'DAIS', 'DAGM'],
    opposite: 'CRIM'
  },
  DAGM: {
    title: 'Fortune Teller',
    text: '<strong>Predicting the future is your superpower.</strong> Having gained a detailed knowledge of a problem space, you’re able to pull information together from lots of different sources, and then present it back and discuss in a way that everyone understands and is able to contribute.',
    slug: 'fortune-teller',
    similars: ['CAGM', 'DRGM', 'DAIM', 'DAGS'],
    opposite: 'CRIS'
  },
  CAGM: {
    title: 'Conductor',
    text: '<strong>You get your kicks through the successes of other people,</strong> helping them work together to deliver something that is greater than the sum of its parts.  You can shape how you communicate seamlessly, playing sergeant major or cheerleader depending on what the situation requires, but always while focusing on the best possible end result.',
    slug: 'conductor',
    similars: ['DAGM', 'CRGM', 'CAIM', 'CAGS'],
    opposite: 'DRIS'
  },
  CAGS: {
    title: 'Visionary',
    text: '<strong>You can see things that other people can’t.</strong> While you might not have all the details about how to get there, you always have a clear vision about where you’re going and are able to inspire others to come with you.',
    slug: 'visionary',
    similars: ['DAGS', 'CRGS', 'CAIS', 'CAGM'],
    opposite: 'DRIM'
  },
  DRGS: {
    title: 'Workshop Warrior',
    text: '<strong>Working with other people and an endless supply of post-it notes is your forte.</strong> With a collection of techniques for every occasion, you’re able to run effective group sessions that bring the best out of everyone and result in actionable next steps.',
    slug: 'workshop-warrior',
    similars: ['CRGS', 'DAGS', 'DRIS', 'DRGM'],
    opposite: 'CAIM'
  },  
  DRGM: {
    title: 'Data Driver',
    text: '<strong>You like helping people work out where they need to go.</strong> You can also suggest options and alternatives and work with people to find the best one.  Then, you’re also great at coming up with lots of ways to get there, and can give clear directions and information to help people recognise when they’re reached their destination.',
    slug: 'data-driver',
    similars: ['CRGM', 'DAGM', 'DRIM', 'DAGI'],
    opposite: 'CAIS'
  },
  CRGM: {
    title: 'Team Player',
    text: '<strong>Everyone thinks you’re a highly valuable member of the team.</strong> Your focus on getting things done is second to none, as is your desire to bring everyone with you, because you know the only way to deliver seamless experiences is if everyone works together.  You’re always focus on how the team can improve and what you can do personally to contribute.',
    slug: 'team-player',
    similars: ['DRGM', 'CAGM', 'CRIM', 'CRGS'],
    opposite: 'DAIS'
  },
  CRGS: {
    title: 'User Champion',
    text: '<strong>You’re always looking out for the quality of the final outcome,</strong> making sure that no corners are cut in your pursuit of the best possible experience.  That said, you’re not bloody-minded, as you know that you need to be diplomatic to get the most from your team.',
    slug: 'user-champion',
    similars: ['DRGS', 'CAGS', 'CRIS', 'CRGM'],
    opposite: 'DAIM'
  },  
  DRIS: {
    title: 'Prototyper',
    text: '<strong>You know that the only way to be sure that something will work</strong> is to make a simple version of it and try it out.  You love fast-paced trial and error, iterating on the best bits until you have something that works for everyone.  You never get too attached to your ideas, always safe in the knowledge that the next big thing is just one prototype away.',
    slug: 'prototyper',
    similars: ['CRIS', 'DAIS', 'DRGS', 'DRIM'],
    opposite: 'CAGM'
  },
  DRIM: {
    title: 'Experimenter',
    text: '<strong>You know there are many ways to solve a problem,</strong> but you’re always keen to find the best way to do it.  Based on your experience, you know that people’s opinions will only get you so far, as it’s only through experimentation that you’ll really discover what works and what doesn’t.  The more surprising the result the better as far as you’re concerned.',
    slug: 'experimenter',
    similars: ['CAIM', 'DRIM', 'DAGM', 'DAIS'],
    opposite: 'CRGS'
  },
  CRIM: {
    title: 'Perfectionist',
    text: '<strong>For you, all the details matter.</strong> You want to make sure every element of an experience works beautifully, so you take the extra time that is needed to add those final layers of polish.  People might never notice, but for you that’s not an excuse to not do it.',
    slug: 'perfectionist',
    similars: ['CAIM', 'DRIM', 'DAGM', 'DAIS'],
    opposite: 'CRGS'
  },
  CRIS: {
    title: 'Painter',
    text: '<strong>To begin with, you like to work in broad brush strokes,</strong> getting a feel for a desirable outcome and then adding detail once you know where you’re heading.  You are happiest when you’re iterating on your own work, taking away elements that aren’t working and adding to the things that are.',
    slug: 'painter',
    similars: ['DRIS', 'CAIS', 'CRGS', 'CRIM'],
    opposite: 'DAGM'
  },
}

export default resultData;
