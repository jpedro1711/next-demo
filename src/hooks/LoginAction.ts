'use server'

import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';
import { cookies } from 'next/headers'

export async function loginAction() {
  const cookiesObj: ReadonlyRequestCookies = await cookies();

  cookiesObj.set('token', 'fake token')
}
