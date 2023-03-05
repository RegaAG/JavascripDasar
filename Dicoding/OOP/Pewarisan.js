// kita sering sekali mendapati kasus membuat sebuah objek dengan spesifikasi yang serupa, tetapi memiliki beberapa perbedaan kecil. Contoh, objek EmailService dengan WhatsAppService. Kedua objek tersebut sama-sama layanan perpesanan, mereka dapat mengirim pesan dan membutuhkan properti sender. Namun, terdapat beberapa perbedaan contohnya WhatsApp bisa mengirim pesan secara broadcast, sedangkan email bisa mengirim pesan secara delay. Pertanyaannya, bagaimana cara membuat class untuk kedua objek ini?

// kita buat superclass bernama MailService yang mengandung seluruh sifat yang sama pada WhatsAppService dan EmailService.

// Superclass
class MailService {
    constructor(sender) {
      this.sender = sender;
    }
   
    sendMessage(message, receiver) {
      console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
}

// Kemudian kita warisi sifat dari MailService ke subclass WhatsAppService dan EmailService dengan menggunakan keyword extends seperti ini.

// Subclass
class WhatsAppService extends MailService {
    sendBroadcastMessage(message, receivers) {
      for (const receiver of receivers) {
        this.sendMessage(message, receiver);
      }
    }
}

// Subclass
class EmailService extends MailService {
    sendDelayedMessage(message, receiver, delay) {
      setTimeout(() => {
        this.sendMessage(message, receiver);
      }, delay);
    }
}




const whatsapp = new WhatsAppService('+6281234567890');
const email = new EmailService('dimas@dicoding.com');
 
whatsapp.sendMessage('Hello', '+6289876543210');
whatsapp.sendBroadcastMessage('Hello', ['+6289876543210', '+6282234567890']);
 
email.sendMessage('Hello', 'john@doe.com');
email.sendDelayedMessage('Hello', 'john@doe.com', 3000);