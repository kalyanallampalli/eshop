class Notifier < ActionMailer::Base
  default from: "from@example.com"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.notifier.contact.subject
  #
  def contact(details)
    @details = details
    mail to: "kalyan.allampalli@gmail.com", subject: "eShop: Contact Message"
  end
end
