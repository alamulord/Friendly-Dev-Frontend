import type { Route } from './+types';
// import { Form } from 'react-router';

// export async function action({ request }: Route.ActionArgs) {
//   const data = await request.formData();
//   const name = data.get('name') as string;
//   const email = data.get('email') as string;
//   const subject = data.get('subject') as string;
//   const message = data.get('message') as string;

//   const error: Record<string, string> = {};

//   if (!name) error.name = 'name is required';
//   if (!email) {
//     error.email = 'email is required';
//   } else if (!/^[^\s@]+@[^\s@]+\.[^s@]+$/.test(email)) {
//     error.email = 'invalid email formart';
//   }
//   if (!subject) error.subject = 'subject is required';
//   if (!message) error.message = 'message is required';

//   if (Object.keys(error).length > 0) {
//     return { error };
//   }

//   const dataFetched = {
//     name,
//     email,
//     subject,
//     message,
//   };

//   return { message: 'Form sbumitted successfully', dataFetched };
// }

const ContactPage = ({ actionData }: Route.ComponentProps) => {
  // const error = actionData?.error || {}
  return (
    <div className='max-w-3xl bg-gray-800  px-6 py-8 mx-auto'>
      <h2 className='text-3xl font-white text-bold mb-3 text-center'>
        📝 Contact
      </h2>

      {/* {actionData?.message ? (
        <p className='p-2 text-sm text-gray-100 text-center bg-green-800 mb-6 rounded-md border border-green-500'>
          {actionData.message}
        </p>
      ) : null} */}

      <form
        action='https://formspree.io/f/xwprwdkk'
        method='post'
        className='space-y-4'
      >
        <div>
          <label
            htmlFor='name'
            className='block text-sm text-gray-400 font-medium'
          >
            Full Name
          </label>

          <input
            name='name'
            id='name'
            type='text'
            className='w-full bg-gray-800 text-gray-100 border border-gray-700 px-4 py-2 text-md rounded-lg mt-1'
          />
          {/* {error.name && (
            <p className='text-sm text-red-400 mt-1'>{error.name}</p>
          )} */}
        </div>
        <div>
          <label
            htmlFor='email'
            className='block text-sm text-gray-400 font-medium'
          >
            Email
          </label>

          <input
            name='email'
            id='email'
            type='email'
            className='w-full bg-gray-800 text-gray-100 border border-gray-700 px-4 py-2 text-md rounded-lg mt-1'
          />
          {/* {error.email && (
            <p className='text-sm text-red-400 mt-1'>{error.email}</p>
          )} */}
        </div>
        <div>
          <label
            htmlFor='name'
            className='block text-sm text-gray-400 font-medium'
          >
            Subject:
          </label>

          <input
            name='subject'
            id='subject'
            type='text'
            className='w-full bg-gray-800 text-gray-100 border border-gray-700 px-4 py-2 text-md rounded-lg mt-1'
          />
          {/* {error.subject && (
            <p className='text-sm text-red-400 mt-1'>{error.subject}</p>
          )} */}
        </div>
        <div>
          <label
            htmlFor='name'
            className='block text-sm text-gray-400 font-medium'
          >
            Message:
          </label>

          <textarea
            name='message'
            id='message'
            className='w-full bg-gray-800 text-gray-100 border border-gray-700 px-4 py-2 text-md rounded-lg mt-1'
          ></textarea>
          {/* {error.message && (
            <p className='text-sm text-red-400 mt-1'>{error.message}</p>
          )} */}
        </div>
        <button className='w-full bg-blue-600 text-gray-100 py-2 text-center cursor-pointer rounded-lg hover:bg-blue-700'>
          Send message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
