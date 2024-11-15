import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function SizeAvatars() {
    return (
        <Stack direction="row" spacing={2} className='flex items-center'>

            <Avatar
                alt="Remy Sharp"
                src="https://avatars.githubusercontent.com/u/82860253?v=4"
                sx={{ width: 72, height: 72 }}
            />
            <div>
                <p className='font-semibold text-lg'>Jesiel Gomes</p>
                <p className='font-normal text-sm text-zinc-400'>jesiel364@gmail.com</p>
            </div>

        </Stack>
    );
}
