import type { RecordAuthResponse } from 'pocketbase';

export const useUserState = () => useState<RecordAuthResponse | null>('user', () => null);
