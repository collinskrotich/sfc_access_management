'use client' 

import EditUserForm from '@/components/EditUserForm'

const getUserById = async (id) => {
  try {
    const res = await fetch(`/api/users/${id}`, {
      cache: 'no-store',
    });

    if(!res.ok) {
      throw new Error('Failed to fetch user')
    }
    return res.json();

  }catch (error) {
    console.log(error);
  }
};

  
export default async function EditUser({ params }) {
  const { id } = params;
  const { user } = await getUserById(id);
  const { fullName, email, role } = user;
  return (
    <EditUserForm 
      fullName={fullName}
      email={email}
      role={role}
      id={id}
    />
  )
}

