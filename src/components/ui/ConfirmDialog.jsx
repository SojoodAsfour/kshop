
import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function ConfirmDialog({ open, onClose, onConfirm, title, message, isPending }) {
    const { t } = useTranslation();
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
                    {t('common.cancel')}
                </Button>

                <Button variant='contained' onClick={onConfirm} disabled={isPending}>
                    {t('common.confirm')}
                </Button>
            </DialogActions>
        </Dialog>
    )
}
