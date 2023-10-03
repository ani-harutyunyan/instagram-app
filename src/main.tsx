import React from 'react';
import SearchBar from './components/SearchBar';
import AccountInformation from './components/AccountInformation';
import Posts from './components/Posts';
import PrivateAccount from './components/PrivateAccount';
import Empty from './components/Empty';
import Loading from './components/Loading';
import { useMutationQuery } from './queries';
import { type UserData } from './types/index'

const Main: React.FC = () => {
    // Use the useMutationQuery hook to handle data mutations
    const { mutate: mutation } = useMutationQuery<UserData>('get', 'check_upk')

    // Search user 
    const handleSearch = (query: string) => {
        // Trigger the mutation with the search query
        mutation.mutate({ query })
    };

    return (
        <div className='App flex flex-col p-5'>

            <div>
                <div className="max-w-md mx-auto p-4">
                    <SearchBar onSearch={handleSearch} />
                </div>
            </div>
            {
                mutation.isLoading ? <Loading /> :
                    mutation.data?.user ?
                        <>
                            <AccountInformation data={mutation.data.user} />
                            <hr className='my-4 mx-10' />
                            <div>
                                {mutation.data.user.is_private ? <PrivateAccount /> : <Posts posts={mutation.data.posts.items} />}
                            </div>
                        </>
                        :
                        <Empty />
            }
        </div>
    );
};

export default Main;