import type { RecordAuthResponse } from 'pocketbase';

// Inspired by https://github.com/nuxt/nuxt/discussions/16067#discussioncomment-2267207
export const usePersistedState = <T>(identifier: string, defaultOptions: T): Ref<T> => {
  const persistedObject = useState<T>(identifier, (): T => {
    const item = localStorage.getItem(identifier);
    if (!item) return defaultOptions;

    return (JSON.parse(item) as T) ?? defaultOptions;
  });

  watch(
    persistedObject,
    (object) => {
      localStorage.setItem(identifier, JSON.stringify(object));
    },
    { deep: true }
  );

  return persistedObject;
};

export const useUserState = () => usePersistedState<RecordAuthResponse | null>('user', null);
