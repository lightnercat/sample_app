require 'test_helper'

class UsersProfileTest < ActionDispatch::IntegrationTest

 include ApplicationHelper

 def setup
  @user = users(:michael)
 end

 test "profile display" do
  # show user profile page
  get user_path(@user)
  assert_template 'users/show'
  assert_select 'title', full_title(@user.name)
  assert_select 'h1', text: @user.name
  assert_select 'h1>img.gravatar' # check <img> with class='gravatar' in <h1>
  assert_match @user.microposts.count.to_s, response.body
  assert_select 'div.pagination'
  @user.microposts.paginate(page: 1).each do |micropost|
   assert_match micropost.content, response.body
  end
 end
end
