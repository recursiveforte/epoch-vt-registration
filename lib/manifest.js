import { getAge } from './helpers.js'

export const manifest = {
  questions: [
    {
      header: 'Basic Details',
      items: [
        {
          key: 'Full Name',
          label: 'Full Name',
          type: 'string',
          optional: false
        },
        {
          key: 'Email',
          label: 'Contact Email',
          type: 'string',
          inputType: 'email',
          sublabel: `We'll be in touch using this email, so make sure you check it regularly.`,
          optional: false
        },
        {
          key: 'Phone Number',
          label: 'Phone Number',
          type: 'string',
          optional: true
        },
        {
          key: 'Pronouns',
          label: 'Your Pronouns',
          sublabel: `E.g. she/her, they/them, he/him.`,
          type: 'string',
          optional: false
        },
        {
          key: 'Birthday',
          label: 'Birthday',
          type: 'string',
          inputType: 'date',
          sublabel: `Everyone 18 years old or younger is welcome to attend!`,
          optional: false
        },
        {
          key: 'Shirt',
          label: 'T-Shirt Size',
          type: 'select',
          sublabel: `We'll be giving out free hoodies and T-shirts to all attendees!`,
          options: ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large'],
          optional: false
        },
        {
          key: 'School',
          label: 'What school do you go to?',
          sublabel: "...C-V-who?",
          type: 'string',
          optional: true
        },
        {
          key: 'Skill Level',
          label: 'How would you describe your technical skills?',
          sublabel: `Everyone's welcome! This question is just to help us gauge what resources we need to support attendees.`,
          type: 'select',
          options: [
            'Beginner: I have never coded before or just started learning',
            'Intermediate: I have taken CS classes OR worked on small individual projects',
            'Advanced: I’m comfortable with my skill set and can work on a project without much guidance'
          ],
          optional: false
        },
        {
          key: 'Dietary Restrictions',
          label: 'Do you have any dietary restrictions?',
          sublabel: `We'll do our best to accommodate everyone who attends with lunch and dinner.`,
          type: 'paragraph',
          optional: true
        },
      ]
    },
    {
      header: 'Guardian Details',
      label: `Please provide us with the details of a parent/guardian; we'll contact them with a participant waiver after you submit this form. This waiver will be sent first to you, then after you sign it'll be sent to them.`,
      check: data => data['Birthday'] === undefined || getAge(data['Birthday']) > 17,
      items: [
        {
          key: 'Parent Name',
          label: "What's your guardian's full name?",
          type: 'string',
          optional: false,
          check: data => data['Birthday'] === undefined || getAge(data['Birthday']) > 17,

        },
        {
          key: 'Parent Email',
          label: "What's your guardian's email?",
          type: 'string',
          optional: false,
          check: data => data['Birthday'] === undefined || getAge(data['Birthday']) > 17,

        }
      ]
    },
    {
      header: 'Workshops',
      label: `You'll have the chance to host your own informal workshop, teaching anything you might be passionate about!`,
      items: [
        {
          key: 'Workshop',
          label: 'Would you be interested in hosting a session?',
          sublabel: `Answering yes here isn't a commitment; you can always cancel or change your mind later`,
          type: 'select',
          options: ['Totally!', `Eh nah.`],
          optional: false
        },
        {
          key: 'Workshop Topic',
          label: 'Stupendous! What do you think you\'d like to talk about?',
          type: 'paragraph',
          optional: false,
          check: data =>
            data[
              'Workshop'
            ] === `Eh nah.` ||
            data[
              'Workshop'
            ] === undefined
        }
      ]
    },
    {
      header: 'Now for a bit of fun!',
      items: [
        {
          key: 'Skiing or Snowboarding',
          label: 'Skiing or Snowboarding?',
          type: 'select',
          options: ['Snowboarding, of course!', 'Skiing for the win!', 'I prefer sledding!'],
          optional: false
        },
        {
          key: 'Pineapple on Pizza',
          label: 'Opinon of pineapple on pizza?',
          sublabel: 'Feel free to write an essay :)',
          type: 'paragraph',
          optional: true
        }
      ]
    }
  ]
}

export default manifest;

export const requiredList = (() => {
  const list = {};
  for (const section of manifest.questions) {
    section.items.filter(item => !item.optional).forEach(item => {
      list[item.key] = item.check ? (data => {
        console.log(item.key);
        console.log(!item.check(data) || data[item.key]);
        console.log(!item.check(data));
        console.log(data[item.key]);
        return item.check(data) || data[item.key];
      }) : (data => data[item.key]);
    });
  }
  return list;
})();
