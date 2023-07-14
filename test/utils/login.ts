import IndexPage  from "../page_objects/IndexPage.js";

export async function loginUser(username, password) {
  await IndexPage.enterUsername(username)
  await IndexPage.enterPassword(password)
  await IndexPage.loginUser()
}

