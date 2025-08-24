/* eslint-disable @typescript-eslint/no-explicit-any */
export const errorTranslationMap: Record<string, string> = {
  'Username is already in use': 'Пользователь с таким именем уже существует',
  'Email is already in use': 'Этот email уже используется',
  'Invalid login or password': 'Неверный email или пароль',
  'Network Error': 'Ошибка сети',
  'Request failed with status code 400': 'Неверные данные',
  'Request failed with status code 401': 'Не авторизован',
  'Request failed with status code 404': 'Ресурс не найден',
  'Request failed with status code 500': 'Ошибка сервера',
}

export const translateBackendError = (error: any) => {
  const message = errorCatch(error)

  return errorTranslationMap[message] || 'Произошла ошибка, попробуйте позже'
}

export const errorCatch = (error: any): string => {
  const message = error?.response?.data?.message

  return message
    ? typeof message === 'object'
      ? message[0]
      : message
    : error.message
}
