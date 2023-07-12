import IndexPage  from "../page_objects/IndexPage.js";

export async function loginUser() {
  await IndexPage.enterUsername("standard_user")
  await IndexPage.enterPassword("secret_sauce")
  await IndexPage.loginUser()
}

