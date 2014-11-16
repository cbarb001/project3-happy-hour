class SessionsController < ApplicationController

	skip_before_filter :authorize

	def new
	end

	def create
		user = User.where(email: params[:email]).first
		# first make sure we actually find a user
		# then see if user authenticates
		if user && user.authenticate(params[:password])
			# sets the cookie to the browser
			session[:user_id] = user.id
			redirect_to root_url
		else
			# The two lines below are similar to what is in the users_controller. This will more than likely change as well. This is just an example
			flash.now.alert = "Email or password is invalid"
			render "new"

		end
	end

	def destroy
		# Kill our cookies!
		session[:user_id] = nil
		redirect_to root_url, :notice => "Logged out!"
	end
end