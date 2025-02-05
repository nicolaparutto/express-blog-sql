Express Blog SQL
===
## Consegna:
Prendere l'API precedentemente creata per il blog ed aggiungere la persistenza tramite la connessione a un DataBase.

### Milestone 1:
- Importare il DB in allegato su MySQL Workbench
- Installare il client 'mysql2' con 'npm i mysql2' nell'app Express
- Creare un file di configurazione per connettere il DataBase.
- Inserire un console.log nella logica di connessione e provare ad avviare l'applicazione per verificare che non ci siano errori.

### Milestone 2:
- Fare in modo che l'API di INDEX restituisca la lista dei post, recuperata dal DataBase in formato JSON.
- Verificare da Thunder Client che la risposta sia corretta.

### Milestone 3:
- Fare in modo che l'API di DESTROY permetta di elliminare un post dal DB.
- Verificare su Thunder Client che la chiamata non dia errore e risponda 204.
- Verificare su MySQL Workbench che il post venga efettivamente rimosso.

### Milestone 4:
- Fare in modo che l'API di SHOW restituisca il post desiderato in formato JSON.
 - Verifichiamo su Postman che la risposta sia corretta.

<hr>

### Bonus:
- Fare in modo che la SHOW restituisca il post comprensivo di tag, recuperandoli grazie alla relazione tra post e tags, esistente sul DB.
