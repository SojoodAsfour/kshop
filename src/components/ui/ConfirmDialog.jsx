
import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

export default function ConfirmDialog({ open, onClose, onConfirm, title, message, isPending }) {
    return (
        <Dialog open={open} onClose={onClose} sx={{
            '& .MuiDialog-paper': {
                borderRadius: 3,
                p: 2,
                bgcolor: 'background.paper'
            }
        }}>
            <DialogTitle sx={{ fontFamily: '"Playfair Display", serif' }}>
                {title}
            </DialogTitle>

            <DialogContent>
                {message}
            </DialogContent>

            <DialogActions>
                <Button color='inherit' onClick={onClose} disabled={isPending}>
                    Cancel
                </Button>

                <Button variant='contained' onClick={onConfirm} disabled={isPending}>
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    )
}
