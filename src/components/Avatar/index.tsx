import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

export default function SizeAvatars() {
    return (
        <Stack direction="row" spacing={2}>

            <Avatar
                alt="Remy Sharp"
                src="https://avatars.githubusercontent.com/u/82860253?v=4"
                sx={{ width: 72, height: 72 }}
            />
            <div>
                <Typography>Jesiel Gomes</Typography>
                <Typography>jesiel364@gmail.com</Typography>
            </div>

        </Stack>
    );
}
