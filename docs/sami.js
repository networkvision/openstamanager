
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href=".html">[Global Namespace]</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:API" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="API.html">API</a>                    </div>                </li>                            <li data-name="class:Auth" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Auth.html">Auth</a>                    </div>                </li>                            <li data-name="class:CSRF" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="CSRF.html">CSRF</a>                    </div>                </li>                            <li data-name="class:Database" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Database.html">Database</a>                    </div>                </li>                            <li data-name="class:Filter" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Filter.html">Filter</a>                    </div>                </li>                            <li data-name="class:HTMLHelper" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="HTMLHelper.html">HTMLHelper</a>                    </div>                </li>                            <li data-name="class:Modules" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Modules.html">Modules</a>                    </div>                </li>                            <li data-name="class:Permissions" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Permissions.html">Permissions</a>                    </div>                </li>                            <li data-name="class:Plugins" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Plugins.html">Plugins</a>                    </div>                </li>                            <li data-name="class:Settings" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Settings.html">Settings</a>                    </div>                </li>                            <li data-name="class:Translator" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Translator.html">Translator</a>                    </div>                </li>                            <li data-name="class:Update" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Update.html">Update</a>                    </div>                </li>                            <li data-name="class:Widgets" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Widgets.html">Widgets</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:HTMLBuilder" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="HTMLBuilder.html">HTMLBuilder</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:HTMLBuilder_Handler" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="HTMLBuilder/Handler.html">Handler</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:HTMLBuilder_Handler_ChoicesHandler" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="HTMLBuilder/Handler/ChoicesHandler.html">ChoicesHandler</a>                    </div>                </li>                            <li data-name="class:HTMLBuilder_Handler_DateHandler" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="HTMLBuilder/Handler/DateHandler.html">DateHandler</a>                    </div>                </li>                            <li data-name="class:HTMLBuilder_Handler_DefaultHandler" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="HTMLBuilder/Handler/DefaultHandler.html">DefaultHandler</a>                    </div>                </li>                            <li data-name="class:HTMLBuilder_Handler_HandlerInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="HTMLBuilder/Handler/HandlerInterface.html">HandlerInterface</a>                    </div>                </li>                            <li data-name="class:HTMLBuilder_Handler_MediaHandler" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="HTMLBuilder/Handler/MediaHandler.html">MediaHandler</a>                    </div>                </li>                            <li data-name="class:HTMLBuilder_Handler_SelectHandler" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="HTMLBuilder/Handler/SelectHandler.html">SelectHandler</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:HTMLBuilder_Manager" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="HTMLBuilder/Manager.html">Manager</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:HTMLBuilder_Manager_CSRFManager" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="HTMLBuilder/Manager/CSRFManager.html">CSRFManager</a>                    </div>                </li>                            <li data-name="class:HTMLBuilder_Manager_FileManager" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="HTMLBuilder/Manager/FileManager.html">FileManager</a>                    </div>                </li>                            <li data-name="class:HTMLBuilder_Manager_ManagerInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="HTMLBuilder/Manager/ManagerInterface.html">ManagerInterface</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:HTMLBuilder_Wrapper" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="HTMLBuilder/Wrapper.html">Wrapper</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:HTMLBuilder_Wrapper_HTMLWrapper" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="HTMLBuilder/Wrapper/HTMLWrapper.html">HTMLWrapper</a>                    </div>                </li>                            <li data-name="class:HTMLBuilder_Wrapper_WrapperInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="HTMLBuilder/Wrapper/WrapperInterface.html">WrapperInterface</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:HTMLBuilder_HTMLBuilder" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="HTMLBuilder/HTMLBuilder.html">HTMLBuilder</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Intl" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Intl.html">Intl</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Intl_FileLoader" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Intl/FileLoader.html">FileLoader</a>                    </div>                </li>                            <li data-name="class:Intl_Formatter" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Intl/Formatter.html">Formatter</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Util" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Util.html">Util</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Util_Ini" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Util/Ini.html">Ini</a>                    </div>                </li>                            <li data-name="class:Util_Singleton" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Util/Singleton.html">Singleton</a>                    </div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": ".html", "name": "", "doc": "Namespace "},{"type": "Namespace", "link": "HTMLBuilder.html", "name": "HTMLBuilder", "doc": "Namespace HTMLBuilder"},{"type": "Namespace", "link": "HTMLBuilder/Handler.html", "name": "HTMLBuilder\\Handler", "doc": "Namespace HTMLBuilder\\Handler"},{"type": "Namespace", "link": "HTMLBuilder/Manager.html", "name": "HTMLBuilder\\Manager", "doc": "Namespace HTMLBuilder\\Manager"},{"type": "Namespace", "link": "HTMLBuilder/Wrapper.html", "name": "HTMLBuilder\\Wrapper", "doc": "Namespace HTMLBuilder\\Wrapper"},{"type": "Namespace", "link": "Intl.html", "name": "Intl", "doc": "Namespace Intl"},{"type": "Namespace", "link": "Util.html", "name": "Util", "doc": "Namespace Util"},
            {"type": "Interface", "fromName": "HTMLBuilder\\Handler", "fromLink": "HTMLBuilder/Handler.html", "link": "HTMLBuilder/Handler/HandlerInterface.html", "name": "HTMLBuilder\\Handler\\HandlerInterface", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "HTMLBuilder\\Handler\\HandlerInterface", "fromLink": "HTMLBuilder/Handler/HandlerInterface.html", "link": "HTMLBuilder/Handler/HandlerInterface.html#method_handle", "name": "HTMLBuilder\\Handler\\HandlerInterface::handle", "doc": "&quot;&quot;"},
            
            {"type": "Interface", "fromName": "HTMLBuilder\\Manager", "fromLink": "HTMLBuilder/Manager.html", "link": "HTMLBuilder/Manager/ManagerInterface.html", "name": "HTMLBuilder\\Manager\\ManagerInterface", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "HTMLBuilder\\Manager\\ManagerInterface", "fromLink": "HTMLBuilder/Manager/ManagerInterface.html", "link": "HTMLBuilder/Manager/ManagerInterface.html#method_manage", "name": "HTMLBuilder\\Manager\\ManagerInterface::manage", "doc": "&quot;&quot;"},
            
            {"type": "Interface", "fromName": "HTMLBuilder\\Wrapper", "fromLink": "HTMLBuilder/Wrapper.html", "link": "HTMLBuilder/Wrapper/WrapperInterface.html", "name": "HTMLBuilder\\Wrapper\\WrapperInterface", "doc": "&quot;Interfaccia di base per la gestione della struttura HTML contenente gli input effettivi (generati dai tag di input).&quot;"},
                                                        {"type": "Method", "fromName": "HTMLBuilder\\Wrapper\\WrapperInterface", "fromLink": "HTMLBuilder/Wrapper/WrapperInterface.html", "link": "HTMLBuilder/Wrapper/WrapperInterface.html#method_before", "name": "HTMLBuilder\\Wrapper\\WrapperInterface::before", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "HTMLBuilder\\Wrapper\\WrapperInterface", "fromLink": "HTMLBuilder/Wrapper/WrapperInterface.html", "link": "HTMLBuilder/Wrapper/WrapperInterface.html#method_after", "name": "HTMLBuilder\\Wrapper\\WrapperInterface::after", "doc": "&quot;&quot;"},
            
            
            {"type": "Class",  "link": "API.html", "name": "API", "doc": "&quot;Classe per la gestione delle API del progetto.&quot;"},
                                                        {"type": "Method", "fromName": "API", "fromLink": "API.html", "link": "API.html#method___construct", "name": "API::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "API", "fromLink": "API.html", "link": "API.html#method_retrieve", "name": "API::retrieve", "doc": "&quot;Gestisce le richieste di informazioni riguardanti gli elementi esistenti.&quot;"},
                    {"type": "Method", "fromName": "API", "fromLink": "API.html", "link": "API.html#method_create", "name": "API::create", "doc": "&quot;Gestisce le richieste di creazione nuovi elementi.&quot;"},
                    {"type": "Method", "fromName": "API", "fromLink": "API.html", "link": "API.html#method_update", "name": "API::update", "doc": "&quot;Gestisce le richieste di aggiornamento di elementi esistenti.&quot;"},
                    {"type": "Method", "fromName": "API", "fromLink": "API.html", "link": "API.html#method_delete", "name": "API::delete", "doc": "&quot;Gestisce le richieste di eliminazione di elementi esistenti.&quot;"},
                    {"type": "Method", "fromName": "API", "fromLink": "API.html", "link": "API.html#method_fileRequest", "name": "API::fileRequest", "doc": "&quot;Gestisce le richieste in modo generalizzato, con il relativo richiamo ai file specifici responsabili dell&#039;operazione.&quot;"},
                    {"type": "Method", "fromName": "API", "fromLink": "API.html", "link": "API.html#method_error", "name": "API::error", "doc": "&quot;Genera i contenuti di risposta nel caso si verifichi un errore.&quot;"},
                    {"type": "Method", "fromName": "API", "fromLink": "API.html", "link": "API.html#method_getResources", "name": "API::getResources", "doc": "&quot;Restituisce l&#039;elenco delle risorse disponibili per l&#039;API, suddivise per categoria.&quot;"},
                    {"type": "Method", "fromName": "API", "fromLink": "API.html", "link": "API.html#method_response", "name": "API::response", "doc": "&quot;Formatta i contentuti della risposta secondo il formato JSON.&quot;"},
                    {"type": "Method", "fromName": "API", "fromLink": "API.html", "link": "API.html#method_getStatus", "name": "API::getStatus", "doc": "&quot;Restituisce l&#039;elenco degli stati dell&#039;API.&quot;"},
                    {"type": "Method", "fromName": "API", "fromLink": "API.html", "link": "API.html#method_isAPIRequest", "name": "API::isAPIRequest", "doc": "&quot;Controlla se la richiesta effettuata \u00e8 rivolta all&#039;API.&quot;"},
                    {"type": "Method", "fromName": "API", "fromLink": "API.html", "link": "API.html#method_getRequest", "name": "API::getRequest", "doc": "&quot;Restituisce i parametri specificati dalla richiesta.&quot;"},
                    {"type": "Method", "fromName": "API", "fromLink": "API.html", "link": "API.html#method_isCompatible", "name": "API::isCompatible", "doc": "&quot;Controlla se il database \u00e8 compatibile con l&#039;API.&quot;"},
            
            {"type": "Class",  "link": "Auth.html", "name": "Auth", "doc": "&quot;Classe per la gestione delle utenze.&quot;"},
                                                        {"type": "Method", "fromName": "Auth", "fromLink": "Auth.html", "link": "Auth.html#method___construct", "name": "Auth::__construct", "doc": "&quot;Protected constructor to prevent creating a new instance of the &lt;b&gt;Singleton&lt;\/b&gt; via the &lt;code&gt;new&lt;\/code&gt; operator from outside of this class.&quot;"},
                    {"type": "Method", "fromName": "Auth", "fromLink": "Auth.html", "link": "Auth.html#method_attempt", "name": "Auth::attempt", "doc": "&quot;Effettua un tentativo di accesso con le credenziali fornite.&quot;"},
                    {"type": "Method", "fromName": "Auth", "fromLink": "Auth.html", "link": "Auth.html#method_password_check", "name": "Auth::password_check", "doc": "&quot;Controlla la corrispondeza delle password ed eventalmente effettua un rehashing.&quot;"},
                    {"type": "Method", "fromName": "Auth", "fromLink": "Auth.html", "link": "Auth.html#method_saveToSession", "name": "Auth::saveToSession", "doc": "&quot;Memorizza le informazioni riguardanti l&#039;utente all&#039;interno della sessione.&quot;"},
                    {"type": "Method", "fromName": "Auth", "fromLink": "Auth.html", "link": "Auth.html#method_identifyUser", "name": "Auth::identifyUser", "doc": "&quot;Identifica l&#039;utente interessato dall&#039;autenticazione.&quot;"},
                    {"type": "Method", "fromName": "Auth", "fromLink": "Auth.html", "link": "Auth.html#method_isAuthenticated", "name": "Auth::isAuthenticated", "doc": "&quot;Controlla se l&#039;utente \u00e8 autenticato.&quot;"},
                    {"type": "Method", "fromName": "Auth", "fromLink": "Auth.html", "link": "Auth.html#method_isAdmin", "name": "Auth::isAdmin", "doc": "&quot;Controlla se l&#039;utente appartiene al gruppo degli Amministratori.&quot;"},
                    {"type": "Method", "fromName": "Auth", "fromLink": "Auth.html", "link": "Auth.html#method_getUser", "name": "Auth::getUser", "doc": "&quot;Restituisce le informazioni riguardanti l&#039;utente autenticato.&quot;"},
                    {"type": "Method", "fromName": "Auth", "fromLink": "Auth.html", "link": "Auth.html#method_destory", "name": "Auth::destory", "doc": "&quot;Distrugge le informazioni riguardanti l&#039;utente autenticato, forzando il logout.&quot;"},
                    {"type": "Method", "fromName": "Auth", "fromLink": "Auth.html", "link": "Auth.html#method_getFirstModule", "name": "Auth::getFirstModule", "doc": "&quot;Restituisce il nome del primo modulo navigabile dall&#039;utente autenticato.&quot;"},
                    {"type": "Method", "fromName": "Auth", "fromLink": "Auth.html", "link": "Auth.html#method_hashPassword", "name": "Auth::hashPassword", "doc": "&quot;Restituisce l&#039;hashing della password per la relativa memorizzazione nel database.&quot;"},
                    {"type": "Method", "fromName": "Auth", "fromLink": "Auth.html", "link": "Auth.html#method_getStatus", "name": "Auth::getStatus", "doc": "&quot;Restituisce l&#039;elenco degli stati del sistema di autenticazione.&quot;"},
                    {"type": "Method", "fromName": "Auth", "fromLink": "Auth.html", "link": "Auth.html#method_check", "name": "Auth::check", "doc": "&quot;Controlla se l&#039;utente \u00e8 autenticato.&quot;"},
                    {"type": "Method", "fromName": "Auth", "fromLink": "Auth.html", "link": "Auth.html#method_admin", "name": "Auth::admin", "doc": "&quot;Controlla se l&#039;utente appartiene al gruppo degli Amministratori.&quot;"},
                    {"type": "Method", "fromName": "Auth", "fromLink": "Auth.html", "link": "Auth.html#method_user", "name": "Auth::user", "doc": "&quot;Restituisce le informazioni riguardanti l&#039;utente autenticato.&quot;"},
                    {"type": "Method", "fromName": "Auth", "fromLink": "Auth.html", "link": "Auth.html#method_logout", "name": "Auth::logout", "doc": "&quot;Distrugge le informazioni riguardanti l&#039;utente autenticato, forzando il logout.&quot;"},
                    {"type": "Method", "fromName": "Auth", "fromLink": "Auth.html", "link": "Auth.html#method_firstModule", "name": "Auth::firstModule", "doc": "&quot;Restituisce il nome del primo modulo navigabile dall&#039;utente autenticato.&quot;"},
            
            {"type": "Class",  "link": "CSRF.html", "name": "CSRF", "doc": "&quot;Sistema di protezione CSRF, basato sulla libreria Slim CSRF.&quot;"},
                                                        {"type": "Method", "fromName": "CSRF", "fromLink": "CSRF.html", "link": "CSRF.html#method___construct", "name": "CSRF::__construct", "doc": "&quot;Create new CSRF guard.&quot;"},
                    {"type": "Method", "fromName": "CSRF", "fromLink": "CSRF.html", "link": "CSRF.html#method_getToken", "name": "CSRF::getToken", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "CSRF", "fromLink": "CSRF.html", "link": "CSRF.html#method_generateToken", "name": "CSRF::generateToken", "doc": "&quot;Generates a new CSRF token.&quot;"},
                    {"type": "Method", "fromName": "CSRF", "fromLink": "CSRF.html", "link": "CSRF.html#method_validate", "name": "CSRF::validate", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "CSRF", "fromLink": "CSRF.html", "link": "CSRF.html#method_validateStorage", "name": "CSRF::validateStorage", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "CSRF", "fromLink": "CSRF.html", "link": "CSRF.html#method_validateToken", "name": "CSRF::validateToken", "doc": "&quot;Validate CSRF token from current request against token value stored in $_SESSION.&quot;"},
                    {"type": "Method", "fromName": "CSRF", "fromLink": "CSRF.html", "link": "CSRF.html#method_createToken", "name": "CSRF::createToken", "doc": "&quot;Create CSRF token value.&quot;"},
                    {"type": "Method", "fromName": "CSRF", "fromLink": "CSRF.html", "link": "CSRF.html#method_saveToStorage", "name": "CSRF::saveToStorage", "doc": "&quot;Save token to storage.&quot;"},
                    {"type": "Method", "fromName": "CSRF", "fromLink": "CSRF.html", "link": "CSRF.html#method_getFromStorage", "name": "CSRF::getFromStorage", "doc": "&quot;Get token from storage.&quot;"},
                    {"type": "Method", "fromName": "CSRF", "fromLink": "CSRF.html", "link": "CSRF.html#method_loadLastToken", "name": "CSRF::loadLastToken", "doc": "&quot;Get the most recent key pair from storage.&quot;"},
                    {"type": "Method", "fromName": "CSRF", "fromLink": "CSRF.html", "link": "CSRF.html#method_removeFromStorage", "name": "CSRF::removeFromStorage", "doc": "&quot;Remove token from storage.&quot;"},
                    {"type": "Method", "fromName": "CSRF", "fromLink": "CSRF.html", "link": "CSRF.html#method_enforceStorageLimit", "name": "CSRF::enforceStorageLimit", "doc": "&quot;Remove the oldest tokens from the storage array so that there\nare never more than storageLimit tokens in the array.&quot;"},
                    {"type": "Method", "fromName": "CSRF", "fromLink": "CSRF.html", "link": "CSRF.html#method_setStorageLimit", "name": "CSRF::setStorageLimit", "doc": "&quot;Setter for storageLimit.&quot;"},
                    {"type": "Method", "fromName": "CSRF", "fromLink": "CSRF.html", "link": "CSRF.html#method_isPersistent", "name": "CSRF::isPersistent", "doc": "&quot;Getter for persistentTokenMode.&quot;"},
            
            {"type": "Class",  "link": "Database.html", "name": "Database", "doc": "&quot;Classe per gestire la connessione al database.&quot;"},
                                                        {"type": "Method", "fromName": "Database", "fromLink": "Database.html", "link": "Database.html#method___construct", "name": "Database::__construct", "doc": "&quot;Costruisce la nuova connessione al database.&quot;"},
                    {"type": "Method", "fromName": "Database", "fromLink": "Database.html", "link": "Database.html#method_getConnection", "name": "Database::getConnection", "doc": "&quot;Restituisce la connessione attiva al database, creandola nel caso non esista.&quot;"},
                    {"type": "Method", "fromName": "Database", "fromLink": "Database.html", "link": "Database.html#method_getInstance", "name": "Database::getInstance", "doc": "&quot;Restituisce l&#039;istanza della classe in oggetto.&quot;"},
                    {"type": "Method", "fromName": "Database", "fromLink": "Database.html", "link": "Database.html#method_getPDO", "name": "Database::getPDO", "doc": "&quot;Restituisce l&#039;oggetto PDO artefice della connessione.&quot;"},
                    {"type": "Method", "fromName": "Database", "fromLink": "Database.html", "link": "Database.html#method_isConnected", "name": "Database::isConnected", "doc": "&quot;Controlla se la connessione \u00e8 valida e andata a buon fine.&quot;"},
                    {"type": "Method", "fromName": "Database", "fromLink": "Database.html", "link": "Database.html#method_isInstalled", "name": "Database::isInstalled", "doc": "&quot;Controlla se il database necessario al progetto esiste.&quot;"},
                    {"type": "Method", "fromName": "Database", "fromLink": "Database.html", "link": "Database.html#method_getMySQLVersion", "name": "Database::getMySQLVersion", "doc": "&quot;Restituisce la versione del DBMS MySQL in utilizzo.&quot;"},
                    {"type": "Method", "fromName": "Database", "fromLink": "Database.html", "link": "Database.html#method_getDatabaseName", "name": "Database::getDatabaseName", "doc": "&quot;Restituisce il nome del database a cui si \u00e8 connessi.&quot;"},
                    {"type": "Method", "fromName": "Database", "fromLink": "Database.html", "link": "Database.html#method_query", "name": "Database::query", "doc": "&quot;Esegue la query indicata, restituendo l&#039;identificativo della nuova entit\u00e0 se si tratta di una query di inserimento.&quot;"},
                    {"type": "Method", "fromName": "Database", "fromLink": "Database.html", "link": "Database.html#method_fetchArray", "name": "Database::fetchArray", "doc": "&quot;Restituisce un&#039;array strutturato in base ai nomi degli attributi della selezione.&quot;"},
                    {"type": "Method", "fromName": "Database", "fromLink": "Database.html", "link": "Database.html#method_fetchRows", "name": "Database::fetchRows", "doc": "&quot;Restituisce un&#039;array strutturato in base agli indici degli attributi della selezione.&quot;"},
                    {"type": "Method", "fromName": "Database", "fromLink": "Database.html", "link": "Database.html#method_fetchRow", "name": "Database::fetchRow", "doc": "&quot;Restituisce il primo elemento della selezione, strutturato in base ai nomi degli attributi.&quot;"},
                    {"type": "Method", "fromName": "Database", "fromLink": "Database.html", "link": "Database.html#method_fetchNum", "name": "Database::fetchNum", "doc": "&quot;Restituisce il numero dei risultati della selezione.&quot;"},
                    {"type": "Method", "fromName": "Database", "fromLink": "Database.html", "link": "Database.html#method_last_inserted_id", "name": "Database::last_inserted_id", "doc": "&quot;Restituisce l&#039;identificativo dell&#039;ultimo elemento inserito.&quot;"},
                    {"type": "Method", "fromName": "Database", "fromLink": "Database.html", "link": "Database.html#method_lastInsertedID", "name": "Database::lastInsertedID", "doc": "&quot;Restituisce l&#039;identificativo dell&#039;ultimo elemento inserito.&quot;"},
                    {"type": "Method", "fromName": "Database", "fromLink": "Database.html", "link": "Database.html#method_prepare", "name": "Database::prepare", "doc": "&quot;Prepara il parametro inserito per l&#039;inserimento in una query SQL.&quot;"},
                    {"type": "Method", "fromName": "Database", "fromLink": "Database.html", "link": "Database.html#method_quote", "name": "Database::quote", "doc": "&quot;Prepara il campo per l&#039;inserimento in uno statement SQL.&quot;"},
                    {"type": "Method", "fromName": "Database", "fromLink": "Database.html", "link": "Database.html#method_insert", "name": "Database::insert", "doc": "&quot;Costruisce la query per l&#039;INSERT definito dagli argomenti.&quot;"},
                    {"type": "Method", "fromName": "Database", "fromLink": "Database.html", "link": "Database.html#method_update", "name": "Database::update", "doc": "&quot;Costruisce la query per l&#039;UPDATE definito dagli argomenti.&quot;"},
                    {"type": "Method", "fromName": "Database", "fromLink": "Database.html", "link": "Database.html#method_select", "name": "Database::select", "doc": "&quot;Costruisce la query per il SELECT definito dagli argomenti.&quot;"},
                    {"type": "Method", "fromName": "Database", "fromLink": "Database.html", "link": "Database.html#method_sync", "name": "Database::sync", "doc": "&quot;Sincronizza i valori indicati associati alle condizioni, rimuovendo le combinazioni aggiuntive e inserendo quelle non ancora presenti.&quot;"},
                    {"type": "Method", "fromName": "Database", "fromLink": "Database.html", "link": "Database.html#method_attach", "name": "Database::attach", "doc": "&quot;Inserisce le le combinazioni tra i valori indicati e le condizioni.&quot;"},
                    {"type": "Method", "fromName": "Database", "fromLink": "Database.html", "link": "Database.html#method_detach", "name": "Database::detach", "doc": "&quot;Rimuove le le combinazioni tra i valori indicati e le condizioni.&quot;"},
                    {"type": "Method", "fromName": "Database", "fromLink": "Database.html", "link": "Database.html#method_prepareValue", "name": "Database::prepareValue", "doc": "&quot;Predispone una variabile per il relativo inserimento all&#039;interno di uno statement SQL.&quot;"},
                    {"type": "Method", "fromName": "Database", "fromLink": "Database.html", "link": "Database.html#method_whereStatement", "name": "Database::whereStatement", "doc": "&quot;Predispone il contenuto di un array come clausola WHERE.&quot;"},
                    {"type": "Method", "fromName": "Database", "fromLink": "Database.html", "link": "Database.html#method_multiQuery", "name": "Database::multiQuery", "doc": "&quot;Esegue le query interne ad un file .sql.&quot;"},
                    {"type": "Method", "fromName": "Database", "fromLink": "Database.html", "link": "Database.html#method_signal", "name": "Database::signal", "doc": "&quot;Aggiunge informazioni alla struttura di base dell&#039;erroe o dell&#039;eccezione intercettata.&quot;"},
            
            {"type": "Class",  "link": "Filter.html", "name": "Filter", "doc": "&quot;Classe per gestire la sanitarizzazione degli input, basata sul framework open source HTMLPurifier.&quot;"},
                                                        {"type": "Method", "fromName": "Filter", "fromLink": "Filter.html", "link": "Filter.html#method_getValue", "name": "Filter::getValue", "doc": "&quot;Restituisce il valore presente nei dati ottenuti dall&#039;input dell&#039;utente.&quot;"},
                    {"type": "Method", "fromName": "Filter", "fromLink": "Filter.html", "link": "Filter.html#method_getPOST", "name": "Filter::getPOST", "doc": "&quot;Restituisce i contenuti dalla sezione POST.&quot;"},
                    {"type": "Method", "fromName": "Filter", "fromLink": "Filter.html", "link": "Filter.html#method_post", "name": "Filter::post", "doc": "&quot;Restituisce il valore presente nei dati ottenuti dalla sezione POST.&quot;"},
                    {"type": "Method", "fromName": "Filter", "fromLink": "Filter.html", "link": "Filter.html#method_getGET", "name": "Filter::getGET", "doc": "&quot;Restituisce i contenuti dalla sezione GET.&quot;"},
                    {"type": "Method", "fromName": "Filter", "fromLink": "Filter.html", "link": "Filter.html#method_get", "name": "Filter::get", "doc": "&quot;Restituisce il valore presente nei dati ottenuti dalla sezione GET.&quot;"},
                    {"type": "Method", "fromName": "Filter", "fromLink": "Filter.html", "link": "Filter.html#method_sanitize", "name": "Filter::sanitize", "doc": "&quot;Sanitarizza il testo inserito.&quot;"},
                    {"type": "Method", "fromName": "Filter", "fromLink": "Filter.html", "link": "Filter.html#method_getPurifier", "name": "Filter::getPurifier", "doc": "&quot;Restituisce l&#039;istanza di HTMLPurifier in utilizzo.&quot;"},
            
            {"type": "Class", "fromName": "HTMLBuilder", "fromLink": "HTMLBuilder.html", "link": "HTMLBuilder/HTMLBuilder.html", "name": "HTMLBuilder\\HTMLBuilder", "doc": "&quot;Classe dedicata alla gestione della conversione di tag in codice HTML.&quot;"},
                                                        {"type": "Method", "fromName": "HTMLBuilder\\HTMLBuilder", "fromLink": "HTMLBuilder/HTMLBuilder.html", "link": "HTMLBuilder/HTMLBuilder.html#method_replace", "name": "HTMLBuilder\\HTMLBuilder::replace", "doc": "&quot;Esegue la sostituzione dei tag personalizzati con il relativo codice HTML.&quot;"},
                    {"type": "Method", "fromName": "HTMLBuilder\\HTMLBuilder", "fromLink": "HTMLBuilder/HTMLBuilder.html", "link": "HTMLBuilder/HTMLBuilder.html#method_generate", "name": "HTMLBuilder\\HTMLBuilder::generate", "doc": "&quot;Genera il codice HTML per i singoli tag di input.&quot;"},
                    {"type": "Method", "fromName": "HTMLBuilder\\HTMLBuilder", "fromLink": "HTMLBuilder/HTMLBuilder.html", "link": "HTMLBuilder/HTMLBuilder.html#method_decode", "name": "HTMLBuilder\\HTMLBuilder::decode", "doc": "&quot;Decodifica i tag personalizzati e li converte in un array basato sul formato JSON.&quot;"},
                    {"type": "Method", "fromName": "HTMLBuilder\\HTMLBuilder", "fromLink": "HTMLBuilder/HTMLBuilder.html", "link": "HTMLBuilder/HTMLBuilder.html#method_elaborate", "name": "HTMLBuilder\\HTMLBuilder::elaborate", "doc": "&quot;Elabora l&#039;array contenente le impostazioni del tag per renderlo fruibile alla conversione in HTML (per i tag di input).&quot;"},
                    {"type": "Method", "fromName": "HTMLBuilder\\HTMLBuilder", "fromLink": "HTMLBuilder/HTMLBuilder.html", "link": "HTMLBuilder/HTMLBuilder.html#method_process", "name": "HTMLBuilder\\HTMLBuilder::process", "doc": "&quot;Sostituisce i placeholder delle impostazioni con i relativi valori (per i tag di input).&quot;"},
                    {"type": "Method", "fromName": "HTMLBuilder\\HTMLBuilder", "fromLink": "HTMLBuilder/HTMLBuilder.html", "link": "HTMLBuilder/HTMLBuilder.html#method_getHandlerName", "name": "HTMLBuilder\\HTMLBuilder::getHandlerName", "doc": "&quot;Restituisce il nome della classe resposabile per la gestione di una determinata tipologia di tag di input.&quot;"},
                    {"type": "Method", "fromName": "HTMLBuilder\\HTMLBuilder", "fromLink": "HTMLBuilder/HTMLBuilder.html", "link": "HTMLBuilder/HTMLBuilder.html#method_getHandler", "name": "HTMLBuilder\\HTMLBuilder::getHandler", "doc": "&quot;Restituisce l&#039;istanza della classe resposabile per la gestione di una determinata tipologia di tag di input.&quot;"},
                    {"type": "Method", "fromName": "HTMLBuilder\\HTMLBuilder", "fromLink": "HTMLBuilder/HTMLBuilder.html", "link": "HTMLBuilder/HTMLBuilder.html#method_setHandler", "name": "HTMLBuilder\\HTMLBuilder::setHandler", "doc": "&quot;Imposta una determinata classe come resposabile per la gestione di una determinata tipologia di tag di input.&quot;"},
                    {"type": "Method", "fromName": "HTMLBuilder\\HTMLBuilder", "fromLink": "HTMLBuilder/HTMLBuilder.html", "link": "HTMLBuilder/HTMLBuilder.html#method_getWrapper", "name": "HTMLBuilder\\HTMLBuilder::getWrapper", "doc": "&quot;Restituisce l&#039;oggetto responsabile per la costruzione del codice HTML contenente gli input effettivi.&quot;"},
                    {"type": "Method", "fromName": "HTMLBuilder\\HTMLBuilder", "fromLink": "HTMLBuilder/HTMLBuilder.html", "link": "HTMLBuilder/HTMLBuilder.html#method_setWrapper", "name": "HTMLBuilder\\HTMLBuilder::setWrapper", "doc": "&quot;Imposta l&#039;oggetto responsabile per la costruzione del codice HTML contenente gli input effettivi.&quot;"},
                    {"type": "Method", "fromName": "HTMLBuilder\\HTMLBuilder", "fromLink": "HTMLBuilder/HTMLBuilder.html", "link": "HTMLBuilder/HTMLBuilder.html#method_getManager", "name": "HTMLBuilder\\HTMLBuilder::getManager", "doc": "&quot;Restituisce l&#039;oggetto responsabile per la costruzione del codice HTML per il tag personalizzato.&quot;"},
                    {"type": "Method", "fromName": "HTMLBuilder\\HTMLBuilder", "fromLink": "HTMLBuilder/HTMLBuilder.html", "link": "HTMLBuilder/HTMLBuilder.html#method_setManager", "name": "HTMLBuilder\\HTMLBuilder::setManager", "doc": "&quot;Imposta l&#039;oggetto responsabile per la costruzione del codice HTML per il tag personalizzato.&quot;"},
            
            {"type": "Class", "fromName": "HTMLBuilder\\Handler", "fromLink": "HTMLBuilder/Handler.html", "link": "HTMLBuilder/Handler/ChoicesHandler.html", "name": "HTMLBuilder\\Handler\\ChoicesHandler", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "HTMLBuilder\\Handler\\ChoicesHandler", "fromLink": "HTMLBuilder/Handler/ChoicesHandler.html", "link": "HTMLBuilder/Handler/ChoicesHandler.html#method_handle", "name": "HTMLBuilder\\Handler\\ChoicesHandler::handle", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "HTMLBuilder\\Handler\\ChoicesHandler", "fromLink": "HTMLBuilder/Handler/ChoicesHandler.html", "link": "HTMLBuilder/Handler/ChoicesHandler.html#method_checkbox", "name": "HTMLBuilder\\Handler\\ChoicesHandler::checkbox", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "HTMLBuilder\\Handler\\ChoicesHandler", "fromLink": "HTMLBuilder/Handler/ChoicesHandler.html", "link": "HTMLBuilder/Handler/ChoicesHandler.html#method_bootswitch", "name": "HTMLBuilder\\Handler\\ChoicesHandler::bootswitch", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "HTMLBuilder\\Handler\\ChoicesHandler", "fromLink": "HTMLBuilder/Handler/ChoicesHandler.html", "link": "HTMLBuilder/Handler/ChoicesHandler.html#method_radio", "name": "HTMLBuilder\\Handler\\ChoicesHandler::radio", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "HTMLBuilder\\Handler", "fromLink": "HTMLBuilder/Handler.html", "link": "HTMLBuilder/Handler/DateHandler.html", "name": "HTMLBuilder\\Handler\\DateHandler", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "HTMLBuilder\\Handler\\DateHandler", "fromLink": "HTMLBuilder/Handler/DateHandler.html", "link": "HTMLBuilder/Handler/DateHandler.html#method_handle", "name": "HTMLBuilder\\Handler\\DateHandler::handle", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "HTMLBuilder\\Handler\\DateHandler", "fromLink": "HTMLBuilder/Handler/DateHandler.html", "link": "HTMLBuilder/Handler/DateHandler.html#method_timestamp", "name": "HTMLBuilder\\Handler\\DateHandler::timestamp", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "HTMLBuilder\\Handler\\DateHandler", "fromLink": "HTMLBuilder/Handler/DateHandler.html", "link": "HTMLBuilder/Handler/DateHandler.html#method_date", "name": "HTMLBuilder\\Handler\\DateHandler::date", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "HTMLBuilder\\Handler\\DateHandler", "fromLink": "HTMLBuilder/Handler/DateHandler.html", "link": "HTMLBuilder/Handler/DateHandler.html#method_time", "name": "HTMLBuilder\\Handler\\DateHandler::time", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "HTMLBuilder\\Handler", "fromLink": "HTMLBuilder/Handler.html", "link": "HTMLBuilder/Handler/DefaultHandler.html", "name": "HTMLBuilder\\Handler\\DefaultHandler", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "HTMLBuilder\\Handler\\DefaultHandler", "fromLink": "HTMLBuilder/Handler/DefaultHandler.html", "link": "HTMLBuilder/Handler/DefaultHandler.html#method_handle", "name": "HTMLBuilder\\Handler\\DefaultHandler::handle", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "HTMLBuilder\\Handler\\DefaultHandler", "fromLink": "HTMLBuilder/Handler/DefaultHandler.html", "link": "HTMLBuilder/Handler/DefaultHandler.html#method_text", "name": "HTMLBuilder\\Handler\\DefaultHandler::text", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "HTMLBuilder\\Handler\\DefaultHandler", "fromLink": "HTMLBuilder/Handler/DefaultHandler.html", "link": "HTMLBuilder/Handler/DefaultHandler.html#method_file", "name": "HTMLBuilder\\Handler\\DefaultHandler::file", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "HTMLBuilder\\Handler\\DefaultHandler", "fromLink": "HTMLBuilder/Handler/DefaultHandler.html", "link": "HTMLBuilder/Handler/DefaultHandler.html#method_password", "name": "HTMLBuilder\\Handler\\DefaultHandler::password", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "HTMLBuilder\\Handler\\DefaultHandler", "fromLink": "HTMLBuilder/Handler/DefaultHandler.html", "link": "HTMLBuilder/Handler/DefaultHandler.html#method_hidden", "name": "HTMLBuilder\\Handler\\DefaultHandler::hidden", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "HTMLBuilder\\Handler\\DefaultHandler", "fromLink": "HTMLBuilder/Handler/DefaultHandler.html", "link": "HTMLBuilder/Handler/DefaultHandler.html#method_email", "name": "HTMLBuilder\\Handler\\DefaultHandler::email", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "HTMLBuilder\\Handler\\DefaultHandler", "fromLink": "HTMLBuilder/Handler/DefaultHandler.html", "link": "HTMLBuilder/Handler/DefaultHandler.html#method_number", "name": "HTMLBuilder\\Handler\\DefaultHandler::number", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "HTMLBuilder\\Handler\\DefaultHandler", "fromLink": "HTMLBuilder/Handler/DefaultHandler.html", "link": "HTMLBuilder/Handler/DefaultHandler.html#method_custom", "name": "HTMLBuilder\\Handler\\DefaultHandler::custom", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "HTMLBuilder\\Handler\\DefaultHandler", "fromLink": "HTMLBuilder/Handler/DefaultHandler.html", "link": "HTMLBuilder/Handler/DefaultHandler.html#method_textarea", "name": "HTMLBuilder\\Handler\\DefaultHandler::textarea", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "HTMLBuilder\\Handler", "fromLink": "HTMLBuilder/Handler.html", "link": "HTMLBuilder/Handler/HandlerInterface.html", "name": "HTMLBuilder\\Handler\\HandlerInterface", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "HTMLBuilder\\Handler\\HandlerInterface", "fromLink": "HTMLBuilder/Handler/HandlerInterface.html", "link": "HTMLBuilder/Handler/HandlerInterface.html#method_handle", "name": "HTMLBuilder\\Handler\\HandlerInterface::handle", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "HTMLBuilder\\Handler", "fromLink": "HTMLBuilder/Handler.html", "link": "HTMLBuilder/Handler/MediaHandler.html", "name": "HTMLBuilder\\Handler\\MediaHandler", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "HTMLBuilder\\Handler\\MediaHandler", "fromLink": "HTMLBuilder/Handler/MediaHandler.html", "link": "HTMLBuilder/Handler/MediaHandler.html#method_handle", "name": "HTMLBuilder\\Handler\\MediaHandler::handle", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "HTMLBuilder\\Handler", "fromLink": "HTMLBuilder/Handler.html", "link": "HTMLBuilder/Handler/SelectHandler.html", "name": "HTMLBuilder\\Handler\\SelectHandler", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "HTMLBuilder\\Handler\\SelectHandler", "fromLink": "HTMLBuilder/Handler/SelectHandler.html", "link": "HTMLBuilder/Handler/SelectHandler.html#method_handle", "name": "HTMLBuilder\\Handler\\SelectHandler::handle", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "HTMLBuilder\\Handler\\SelectHandler", "fromLink": "HTMLBuilder/Handler/SelectHandler.html", "link": "HTMLBuilder/Handler/SelectHandler.html#method_select2", "name": "HTMLBuilder\\Handler\\SelectHandler::select2", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "HTMLBuilder\\Handler\\SelectHandler", "fromLink": "HTMLBuilder/Handler/SelectHandler.html", "link": "HTMLBuilder/Handler/SelectHandler.html#method_selectJSON", "name": "HTMLBuilder\\Handler\\SelectHandler::selectJSON", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "HTMLBuilder\\Handler\\SelectHandler", "fromLink": "HTMLBuilder/Handler/SelectHandler.html", "link": "HTMLBuilder/Handler/SelectHandler.html#method_selectQuery", "name": "HTMLBuilder\\Handler\\SelectHandler::selectQuery", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "HTMLBuilder\\Handler\\SelectHandler", "fromLink": "HTMLBuilder/Handler/SelectHandler.html", "link": "HTMLBuilder/Handler/SelectHandler.html#method_selectList", "name": "HTMLBuilder\\Handler\\SelectHandler::selectList", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "HTMLBuilder\\Manager", "fromLink": "HTMLBuilder/Manager.html", "link": "HTMLBuilder/Manager/CSRFManager.html", "name": "HTMLBuilder\\Manager\\CSRFManager", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "HTMLBuilder\\Manager\\CSRFManager", "fromLink": "HTMLBuilder/Manager/CSRFManager.html", "link": "HTMLBuilder/Manager/CSRFManager.html#method_manage", "name": "HTMLBuilder\\Manager\\CSRFManager::manage", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "HTMLBuilder\\Manager", "fromLink": "HTMLBuilder/Manager.html", "link": "HTMLBuilder/Manager/FileManager.html", "name": "HTMLBuilder\\Manager\\FileManager", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "HTMLBuilder\\Manager\\FileManager", "fromLink": "HTMLBuilder/Manager/FileManager.html", "link": "HTMLBuilder/Manager/FileManager.html#method_manage", "name": "HTMLBuilder\\Manager\\FileManager::manage", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "HTMLBuilder\\Manager", "fromLink": "HTMLBuilder/Manager.html", "link": "HTMLBuilder/Manager/ManagerInterface.html", "name": "HTMLBuilder\\Manager\\ManagerInterface", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "HTMLBuilder\\Manager\\ManagerInterface", "fromLink": "HTMLBuilder/Manager/ManagerInterface.html", "link": "HTMLBuilder/Manager/ManagerInterface.html#method_manage", "name": "HTMLBuilder\\Manager\\ManagerInterface::manage", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "HTMLBuilder\\Wrapper", "fromLink": "HTMLBuilder/Wrapper.html", "link": "HTMLBuilder/Wrapper/HTMLWrapper.html", "name": "HTMLBuilder\\Wrapper\\HTMLWrapper", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "HTMLBuilder\\Wrapper\\HTMLWrapper", "fromLink": "HTMLBuilder/Wrapper/HTMLWrapper.html", "link": "HTMLBuilder/Wrapper/HTMLWrapper.html#method_before", "name": "HTMLBuilder\\Wrapper\\HTMLWrapper::before", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "HTMLBuilder\\Wrapper\\HTMLWrapper", "fromLink": "HTMLBuilder/Wrapper/HTMLWrapper.html", "link": "HTMLBuilder/Wrapper/HTMLWrapper.html#method_after", "name": "HTMLBuilder\\Wrapper\\HTMLWrapper::after", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "HTMLBuilder\\Wrapper\\HTMLWrapper", "fromLink": "HTMLBuilder/Wrapper/HTMLWrapper.html", "link": "HTMLBuilder/Wrapper/HTMLWrapper.html#method_parser", "name": "HTMLBuilder\\Wrapper\\HTMLWrapper::parser", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "HTMLBuilder\\Wrapper\\HTMLWrapper", "fromLink": "HTMLBuilder/Wrapper/HTMLWrapper.html", "link": "HTMLBuilder/Wrapper/HTMLWrapper.html#method_add", "name": "HTMLBuilder\\Wrapper\\HTMLWrapper::add", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "HTMLBuilder\\Wrapper\\HTMLWrapper", "fromLink": "HTMLBuilder/Wrapper/HTMLWrapper.html", "link": "HTMLBuilder/Wrapper/HTMLWrapper.html#method_choice", "name": "HTMLBuilder\\Wrapper\\HTMLWrapper::choice", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "HTMLBuilder\\Wrapper", "fromLink": "HTMLBuilder/Wrapper.html", "link": "HTMLBuilder/Wrapper/WrapperInterface.html", "name": "HTMLBuilder\\Wrapper\\WrapperInterface", "doc": "&quot;Interfaccia di base per la gestione della struttura HTML contenente gli input effettivi (generati dai tag di input).&quot;"},
                                                        {"type": "Method", "fromName": "HTMLBuilder\\Wrapper\\WrapperInterface", "fromLink": "HTMLBuilder/Wrapper/WrapperInterface.html", "link": "HTMLBuilder/Wrapper/WrapperInterface.html#method_before", "name": "HTMLBuilder\\Wrapper\\WrapperInterface::before", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "HTMLBuilder\\Wrapper\\WrapperInterface", "fromLink": "HTMLBuilder/Wrapper/WrapperInterface.html", "link": "HTMLBuilder/Wrapper/WrapperInterface.html#method_after", "name": "HTMLBuilder\\Wrapper\\WrapperInterface::after", "doc": "&quot;&quot;"},
            
            {"type": "Class",  "link": "HTMLHelper.html", "name": "HTMLHelper", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "HTMLHelper", "fromLink": "HTMLHelper.html", "link": "HTMLHelper.html#method_form", "name": "HTMLHelper::form", "doc": "&quot;Function to read parameter from GET or POST request, escape it and filter it by its rules:\nstring every string\nint integer value\ndecimal decimal value (force conversion of commas into points: 0,01 become 0.01).&quot;"},
            
            {"type": "Class", "fromName": "Intl", "fromLink": "Intl.html", "link": "Intl/FileLoader.html", "name": "Intl\\FileLoader", "doc": "&quot;Classe dedicata al caricamento delle risorse per le traduzioni.&quot;"},
                                                        {"type": "Method", "fromName": "Intl\\FileLoader", "fromLink": "Intl/FileLoader.html", "link": "Intl/FileLoader.html#method___construct", "name": "Intl\\FileLoader::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Intl\\FileLoader", "fromLink": "Intl/FileLoader.html", "link": "Intl/FileLoader.html#method_loadResource", "name": "Intl\\FileLoader::loadResource", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Intl\\FileLoader", "fromLink": "Intl/FileLoader.html", "link": "Intl/FileLoader.html#method_getLoader", "name": "Intl\\FileLoader::getLoader", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Intl", "fromLink": "Intl.html", "link": "Intl/Formatter.html", "name": "Intl\\Formatter", "doc": "&quot;Classe per gestire la formattazione di date e numeri in convenzioni differenti.&quot;"},
                                                        {"type": "Method", "fromName": "Intl\\Formatter", "fromLink": "Intl/Formatter.html", "link": "Intl/Formatter.html#method___construct", "name": "Intl\\Formatter::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Intl\\Formatter", "fromLink": "Intl/Formatter.html", "link": "Intl/Formatter.html#method_setNumberSeparators", "name": "Intl\\Formatter::setNumberSeparators", "doc": "&quot;Imposta il formato dei numeri.&quot;"},
                    {"type": "Method", "fromName": "Intl\\Formatter", "fromLink": "Intl/Formatter.html", "link": "Intl/Formatter.html#method_getNumberSeparators", "name": "Intl\\Formatter::getNumberSeparators", "doc": "&quot;Restituisce i separatori utilizzati per la formattazione.&quot;"},
                    {"type": "Method", "fromName": "Intl\\Formatter", "fromLink": "Intl/Formatter.html", "link": "Intl/Formatter.html#method_setDatePattern", "name": "Intl\\Formatter::setDatePattern", "doc": "&quot;Imposta il formato della data.&quot;"},
                    {"type": "Method", "fromName": "Intl\\Formatter", "fromLink": "Intl/Formatter.html", "link": "Intl/Formatter.html#method_getDatePattern", "name": "Intl\\Formatter::getDatePattern", "doc": "&quot;Restituisce il formato della data.&quot;"},
                    {"type": "Method", "fromName": "Intl\\Formatter", "fromLink": "Intl/Formatter.html", "link": "Intl/Formatter.html#method_setTimePattern", "name": "Intl\\Formatter::setTimePattern", "doc": "&quot;Imposta il formato dell&#039;orario.&quot;"},
                    {"type": "Method", "fromName": "Intl\\Formatter", "fromLink": "Intl/Formatter.html", "link": "Intl/Formatter.html#method_getTimePattern", "name": "Intl\\Formatter::getTimePattern", "doc": "&quot;Restituisce il formato dell&#039;orario.&quot;"},
                    {"type": "Method", "fromName": "Intl\\Formatter", "fromLink": "Intl/Formatter.html", "link": "Intl/Formatter.html#method_setTimestampPattern", "name": "Intl\\Formatter::setTimestampPattern", "doc": "&quot;Imposta il formato del timestamp.&quot;"},
                    {"type": "Method", "fromName": "Intl\\Formatter", "fromLink": "Intl/Formatter.html", "link": "Intl/Formatter.html#method_getTimestampPattern", "name": "Intl\\Formatter::getTimestampPattern", "doc": "&quot;Restituisce il formato del timestamp.&quot;"},
                    {"type": "Method", "fromName": "Intl\\Formatter", "fromLink": "Intl/Formatter.html", "link": "Intl/Formatter.html#method_isNumber", "name": "Intl\\Formatter::isNumber", "doc": "&quot;Controlla se l&#039;elemento indicato \u00e8 un numero.&quot;"},
                    {"type": "Method", "fromName": "Intl\\Formatter", "fromLink": "Intl/Formatter.html", "link": "Intl/Formatter.html#method_isTimestamp", "name": "Intl\\Formatter::isTimestamp", "doc": "&quot;Controlla se l&#039;elemento indicato \u00e8 un timestamp.&quot;"},
                    {"type": "Method", "fromName": "Intl\\Formatter", "fromLink": "Intl/Formatter.html", "link": "Intl/Formatter.html#method_isDate", "name": "Intl\\Formatter::isDate", "doc": "&quot;Controlla se l&#039;elemento indicato \u00e8 una data.&quot;"},
                    {"type": "Method", "fromName": "Intl\\Formatter", "fromLink": "Intl/Formatter.html", "link": "Intl/Formatter.html#method_isTime", "name": "Intl\\Formatter::isTime", "doc": "&quot;Controlla se l&#039;elemento indicato \u00e8 un orario.&quot;"},
                    {"type": "Method", "fromName": "Intl\\Formatter", "fromLink": "Intl/Formatter.html", "link": "Intl/Formatter.html#method_toNumberObject", "name": "Intl\\Formatter::toNumberObject", "doc": "&quot;Converte l&#039;elemento in una rappresentazione numerica.&quot;"},
                    {"type": "Method", "fromName": "Intl\\Formatter", "fromLink": "Intl/Formatter.html", "link": "Intl/Formatter.html#method_toTimestampObject", "name": "Intl\\Formatter::toTimestampObject", "doc": "&quot;Converte l&#039;elemento dal formato personalizzato a quello predefinito di PHP.&quot;"},
                    {"type": "Method", "fromName": "Intl\\Formatter", "fromLink": "Intl/Formatter.html", "link": "Intl/Formatter.html#method_toDateObject", "name": "Intl\\Formatter::toDateObject", "doc": "&quot;Converte l&#039;elemento dal formato personalizzato a quello predefinito di PHP.&quot;"},
                    {"type": "Method", "fromName": "Intl\\Formatter", "fromLink": "Intl/Formatter.html", "link": "Intl/Formatter.html#method_toTimeObject", "name": "Intl\\Formatter::toTimeObject", "doc": "&quot;Converte l&#039;elemento dal formato personalizzato a quello predefinito di PHP.&quot;"},
                    {"type": "Method", "fromName": "Intl\\Formatter", "fromLink": "Intl/Formatter.html", "link": "Intl/Formatter.html#method_formatNumberTo", "name": "Intl\\Formatter::formatNumberTo", "doc": "&quot;Converte un numero da una formattazione all&#039;altra.&quot;"},
                    {"type": "Method", "fromName": "Intl\\Formatter", "fromLink": "Intl/Formatter.html", "link": "Intl/Formatter.html#method_formatTimestampTo", "name": "Intl\\Formatter::formatTimestampTo", "doc": "&quot;Converte un timestamp da una formattazione all&#039;altra.&quot;"},
                    {"type": "Method", "fromName": "Intl\\Formatter", "fromLink": "Intl/Formatter.html", "link": "Intl/Formatter.html#method_formatDateTo", "name": "Intl\\Formatter::formatDateTo", "doc": "&quot;Converte una data da una formattazione all&#039;altra.&quot;"},
                    {"type": "Method", "fromName": "Intl\\Formatter", "fromLink": "Intl/Formatter.html", "link": "Intl/Formatter.html#method_formatTimeTo", "name": "Intl\\Formatter::formatTimeTo", "doc": "&quot;Converte un orario da una formattazione all&#039;altra.&quot;"},
                    {"type": "Method", "fromName": "Intl\\Formatter", "fromLink": "Intl/Formatter.html", "link": "Intl/Formatter.html#method_formatNumberFrom", "name": "Intl\\Formatter::formatNumberFrom", "doc": "&quot;Converte un numero da una formattazione all&#039;altra.&quot;"},
                    {"type": "Method", "fromName": "Intl\\Formatter", "fromLink": "Intl/Formatter.html", "link": "Intl/Formatter.html#method_formatTimestampFrom", "name": "Intl\\Formatter::formatTimestampFrom", "doc": "&quot;Converte un timestamp da una formattazione all&#039;altra.&quot;"},
                    {"type": "Method", "fromName": "Intl\\Formatter", "fromLink": "Intl/Formatter.html", "link": "Intl/Formatter.html#method_formatDateFrom", "name": "Intl\\Formatter::formatDateFrom", "doc": "&quot;Converte una data da una formattazione all&#039;altra.&quot;"},
                    {"type": "Method", "fromName": "Intl\\Formatter", "fromLink": "Intl/Formatter.html", "link": "Intl/Formatter.html#method_formatTimeFrom", "name": "Intl\\Formatter::formatTimeFrom", "doc": "&quot;Converte un orario da una formattazione all&#039;altra.&quot;"},
            
            {"type": "Class",  "link": "Modules.html", "name": "Modules", "doc": "&quot;Classe per la gestione delle informazioni relative ai moduli installati.&quot;"},
                                                        {"type": "Method", "fromName": "Modules", "fromLink": "Modules.html", "link": "Modules.html#method_getModules", "name": "Modules::getModules", "doc": "&quot;Restituisce tutte le informazioni di tutti i moduli installati.&quot;"},
                    {"type": "Method", "fromName": "Modules", "fromLink": "Modules.html", "link": "Modules.html#method_getModule", "name": "Modules::getModule", "doc": "&quot;Restituisce le informazioni relative a un singolo modulo specificato.&quot;"},
                    {"type": "Method", "fromName": "Modules", "fromLink": "Modules.html", "link": "Modules.html#method_getPermission", "name": "Modules::getPermission", "doc": "&quot;Restituisce i permessi accordati all&#039;utente in relazione al modulo specificato.&quot;"},
                    {"type": "Method", "fromName": "Modules", "fromLink": "Modules.html", "link": "Modules.html#method_getAdditionals", "name": "Modules::getAdditionals", "doc": "&quot;Restituisce i filtri aggiuntivi dell&#039;utente in relazione al modulo specificato.&quot;"},
                    {"type": "Method", "fromName": "Modules", "fromLink": "Modules.html", "link": "Modules.html#method_getAdditionalsQuery", "name": "Modules::getAdditionalsQuery", "doc": "&quot;Restituisce le condizioni SQL aggiuntive del modulo.&quot;"},
                    {"type": "Method", "fromName": "Modules", "fromLink": "Modules.html", "link": "Modules.html#method_replaceAdditionals", "name": "Modules::replaceAdditionals", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Modules", "fromLink": "Modules.html", "link": "Modules.html#method_getCurrentModule", "name": "Modules::getCurrentModule", "doc": "&quot;Restituisce l&#039;identificativo del modulo attualmente in utilizzo.&quot;"},
                    {"type": "Method", "fromName": "Modules", "fromLink": "Modules.html", "link": "Modules.html#method_getCurrentElement", "name": "Modules::getCurrentElement", "doc": "&quot;Restituisce l&#039;identificativo dell&#039;elemento attualmente in utilizzo.&quot;"},
                    {"type": "Method", "fromName": "Modules", "fromLink": "Modules.html", "link": "Modules.html#method_getQuery", "name": "Modules::getQuery", "doc": "&quot;Restituisce un&#039;insieme di array comprendenti le informazioni per la costruzione della query del modulo indicato.&quot;"},
                    {"type": "Method", "fromName": "Modules", "fromLink": "Modules.html", "link": "Modules.html#method_readOldQuery", "name": "Modules::readOldQuery", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Modules", "fromLink": "Modules.html", "link": "Modules.html#method_replacePlaceholder", "name": "Modules::replacePlaceholder", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Modules", "fromLink": "Modules.html", "link": "Modules.html#method_getHierarchy", "name": "Modules::getHierarchy", "doc": "&quot;Restituisce tutte le informazioni dei moduli installati in una scala gerarchica fino alla profondit\u00e0 indicata.&quot;"},
                    {"type": "Method", "fromName": "Modules", "fromLink": "Modules.html", "link": "Modules.html#method_buildArray", "name": "Modules::buildArray", "doc": "&quot;Restituisce l&#039;elaborazione dell&#039;array secondo una struttura ad albero (molteplici root).&quot;"},
                    {"type": "Method", "fromName": "Modules", "fromLink": "Modules.html", "link": "Modules.html#method_getMainMenu", "name": "Modules::getMainMenu", "doc": "&quot;Restituisce il menu principale del progetto.&quot;"},
                    {"type": "Method", "fromName": "Modules", "fromLink": "Modules.html", "link": "Modules.html#method_sidebarMenu", "name": "Modules::sidebarMenu", "doc": "&quot;Restituisce l&#039;insieme dei menu derivato da un&#039;array strutturato ad albero.&quot;"},
                    {"type": "Method", "fromName": "Modules", "fromLink": "Modules.html", "link": "Modules.html#method_link", "name": "Modules::link", "doc": "&quot;Undocumented function.&quot;"},
            
            {"type": "Class",  "link": "Permissions.html", "name": "Permissions", "doc": "&quot;Classe per gestire i permessi di accesso alle diverse sezioni del progetto.&quot;"},
                                                        {"type": "Method", "fromName": "Permissions", "fromLink": "Permissions.html", "link": "Permissions.html#method_addModule", "name": "Permissions::addModule", "doc": "&quot;Aggiunge un modulo di cui eseguire il controllo dei permessi.&quot;"},
                    {"type": "Method", "fromName": "Permissions", "fromLink": "Permissions.html", "link": "Permissions.html#method_skip", "name": "Permissions::skip", "doc": "&quot;Ignora il controllo dei permessi per la pagina corrente.&quot;"},
                    {"type": "Method", "fromName": "Permissions", "fromLink": "Permissions.html", "link": "Permissions.html#method_execute", "name": "Permissions::execute", "doc": "&quot;Riabilita il controllo dei permessi per la pagina corrente.&quot;"},
                    {"type": "Method", "fromName": "Permissions", "fromLink": "Permissions.html", "link": "Permissions.html#method_getSkip", "name": "Permissions::getSkip", "doc": "&quot;Restituisce la variabile per cui si effettua o meno il controllo dei permessi per la pagina corrente.&quot;"},
                    {"type": "Method", "fromName": "Permissions", "fromLink": "Permissions.html", "link": "Permissions.html#method_check", "name": "Permissions::check", "doc": "&quot;Esegue il controllo dei permessi.&quot;"},
            
            {"type": "Class",  "link": "Plugins.html", "name": "Plugins", "doc": "&quot;Classe per la gestione delle informazioni relative ai moduli installati.&quot;"},
                                                        {"type": "Method", "fromName": "Plugins", "fromLink": "Plugins.html", "link": "Plugins.html#method_getPlugins", "name": "Plugins::getPlugins", "doc": "&quot;Restituisce tutte le informazioni di tutti i moduli installati.&quot;"},
                    {"type": "Method", "fromName": "Plugins", "fromLink": "Plugins.html", "link": "Plugins.html#method_getPlugin", "name": "Plugins::getPlugin", "doc": "&quot;Restituisce le informazioni relative a un singolo modulo specificato.&quot;"},
                    {"type": "Method", "fromName": "Plugins", "fromLink": "Plugins.html", "link": "Plugins.html#method_getPluginByName", "name": "Plugins::getPluginByName", "doc": "&quot;Restituisce le informazioni relative a un singolo modulo specificato, ricercato in base al nome.&quot;"},
                    {"type": "Method", "fromName": "Plugins", "fromLink": "Plugins.html", "link": "Plugins.html#method_getQuery", "name": "Plugins::getQuery", "doc": "&quot;Restituisce un&#039;insieme di array comprendenti le informazioni per la costruzione della query del modulo indicato.&quot;"},
            
            {"type": "Class",  "link": "Settings.html", "name": "Settings", "doc": "&quot;Classe per la gestione dell impostazioni del progetto.&quot;"},
                                                        {"type": "Method", "fromName": "Settings", "fromLink": "Settings.html", "link": "Settings.html#method_get", "name": "Settings::get", "doc": "&quot;Restituisce il valore corrente dell&#039;impostazione ricercata.&quot;"},
            
            {"type": "Class",  "link": "Translator.html", "name": "Translator", "doc": "&quot;Classe per gestire le traduzioni del progetto.&quot;"},
                                                        {"type": "Method", "fromName": "Translator", "fromLink": "Translator.html", "link": "Translator.html#method___construct", "name": "Translator::__construct", "doc": "&quot;Protected constructor to prevent creating a new instance of the &lt;b&gt;Singleton&lt;\/b&gt; via the &lt;code&gt;new&lt;\/code&gt; operator from outside of this class.&quot;"},
                    {"type": "Method", "fromName": "Translator", "fromLink": "Translator.html", "link": "Translator.html#method_addLocalePath", "name": "Translator::addLocalePath", "doc": "&quot;Ricerca e aggiunge le traduzioni presenti nei percorsi predefiniti (cartella locale sia nella root che nei diversi moduli).&quot;"},
                    {"type": "Method", "fromName": "Translator", "fromLink": "Translator.html", "link": "Translator.html#method_addLocales", "name": "Translator::addLocales", "doc": "&quot;Aggiunge i contenuti della cartella specificata alle traduzioni disponibili.&quot;"},
                    {"type": "Method", "fromName": "Translator", "fromLink": "Translator.html", "link": "Translator.html#method_addLocale", "name": "Translator::addLocale", "doc": "&quot;Aggiunge il linguaggio indicato all&#039;elenco di quelli disponibili.&quot;"},
                    {"type": "Method", "fromName": "Translator", "fromLink": "Translator.html", "link": "Translator.html#method_getAvailableLocales", "name": "Translator::getAvailableLocales", "doc": "&quot;Restituisce l&#039;elenco dei linguaggi disponibili.&quot;"},
                    {"type": "Method", "fromName": "Translator", "fromLink": "Translator.html", "link": "Translator.html#method_isLocaleAvailable", "name": "Translator::isLocaleAvailable", "doc": "&quot;Controlla se il linguaggio indicato \u00e8 disponibile.&quot;"},
                    {"type": "Method", "fromName": "Translator", "fromLink": "Translator.html", "link": "Translator.html#method_setLocale", "name": "Translator::setLocale", "doc": "&quot;Imposta il linguaggio in utilizzo.&quot;"},
                    {"type": "Method", "fromName": "Translator", "fromLink": "Translator.html", "link": "Translator.html#method_getCurrentLocale", "name": "Translator::getCurrentLocale", "doc": "&quot;Restituisce il linguaggio attualmente in utilizzo.&quot;"},
                    {"type": "Method", "fromName": "Translator", "fromLink": "Translator.html", "link": "Translator.html#method_getTranslator", "name": "Translator::getTranslator", "doc": "&quot;Restituisce l&#039;oggetto responsabile della gestione delle traduzioni.&quot;"},
                    {"type": "Method", "fromName": "Translator", "fromLink": "Translator.html", "link": "Translator.html#method_translate", "name": "Translator::translate", "doc": "&quot;Restituisce la traduzione richiesta.&quot;"},
                    {"type": "Method", "fromName": "Translator", "fromLink": "Translator.html", "link": "Translator.html#method_setLocaleFormatter", "name": "Translator::setLocaleFormatter", "doc": "&quot;Genera l&#039;oggetto dedicato alla gestione delle conversioni nella lingua locale.&quot;"},
                    {"type": "Method", "fromName": "Translator", "fromLink": "Translator.html", "link": "Translator.html#method_getLocaleFormatter", "name": "Translator::getLocaleFormatter", "doc": "&quot;Restituisce il formato locale della data.&quot;"},
                    {"type": "Method", "fromName": "Translator", "fromLink": "Translator.html", "link": "Translator.html#method_getEnglishFormatter", "name": "Translator::getEnglishFormatter", "doc": "&quot;Restituisce il formato locale della data.&quot;"},
                    {"type": "Method", "fromName": "Translator", "fromLink": "Translator.html", "link": "Translator.html#method_getLocaleDatePattern", "name": "Translator::getLocaleDatePattern", "doc": "&quot;Restituisce il formato locale della data.&quot;"},
                    {"type": "Method", "fromName": "Translator", "fromLink": "Translator.html", "link": "Translator.html#method_numberToEnglish", "name": "Translator::numberToEnglish", "doc": "&quot;Converte il numero dalla formattazione locale a quella inglese.&quot;"},
                    {"type": "Method", "fromName": "Translator", "fromLink": "Translator.html", "link": "Translator.html#method_numberToLocale", "name": "Translator::numberToLocale", "doc": "&quot;Converte il numero dalla formattazione inglese a quella locale.&quot;"},
                    {"type": "Method", "fromName": "Translator", "fromLink": "Translator.html", "link": "Translator.html#method_dateToEnglish", "name": "Translator::dateToEnglish", "doc": "&quot;Converte la data dalla formattazione locale a quella inglese.&quot;"},
                    {"type": "Method", "fromName": "Translator", "fromLink": "Translator.html", "link": "Translator.html#method_dateToLocale", "name": "Translator::dateToLocale", "doc": "&quot;Converte la data dalla formattazione inglese a quella locale.&quot;"},
                    {"type": "Method", "fromName": "Translator", "fromLink": "Translator.html", "link": "Translator.html#method_timeToEnglish", "name": "Translator::timeToEnglish", "doc": "&quot;Converte la data dalla formattazione locale a quella inglese.&quot;"},
                    {"type": "Method", "fromName": "Translator", "fromLink": "Translator.html", "link": "Translator.html#method_timeToLocale", "name": "Translator::timeToLocale", "doc": "&quot;Converte la data dalla formattazione inglese a quella locale.&quot;"},
                    {"type": "Method", "fromName": "Translator", "fromLink": "Translator.html", "link": "Translator.html#method_timestampToEnglish", "name": "Translator::timestampToEnglish", "doc": "&quot;Converte un timestamp dalla formattazione locale a quella inglese.&quot;"},
                    {"type": "Method", "fromName": "Translator", "fromLink": "Translator.html", "link": "Translator.html#method_timestampToLocale", "name": "Translator::timestampToLocale", "doc": "&quot;Converte un timestamp dalla formattazione inglese a quella locale.&quot;"},
                    {"type": "Method", "fromName": "Translator", "fromLink": "Translator.html", "link": "Translator.html#method_isValid", "name": "Translator::isValid", "doc": "&quot;Controlla se una data inserita nella formattazione inglese \u00e8 valida.&quot;"},
            
            {"type": "Class",  "link": "Update.html", "name": "Update", "doc": "&quot;Classe dedicata alla gestione delle procedure di aggiornamento del database del progetto.&quot;"},
                                                        {"type": "Method", "fromName": "Update", "fromLink": "Update.html", "link": "Update.html#method_prepareToUpdate", "name": "Update::prepareToUpdate", "doc": "&quot;Controlla la presenza di aggiornamenti e prepara il database per la procedura.&quot;"},
                    {"type": "Method", "fromName": "Update", "fromLink": "Update.html", "link": "Update.html#method_getTodos", "name": "Update::getTodos", "doc": "&quot;Restituisce l&#039;elenco degli aggiornamento incompleti o non ancora effettuati.&quot;"},
                    {"type": "Method", "fromName": "Update", "fromLink": "Update.html", "link": "Update.html#method_getUpdate", "name": "Update::getUpdate", "doc": "&quot;Restituisce il primo aggiornamento che deve essere completato.&quot;"},
                    {"type": "Method", "fromName": "Update", "fromLink": "Update.html", "link": "Update.html#method_isVersion", "name": "Update::isVersion", "doc": "&quot;Controlla che la stringa inserita possieda una struttura corrispondente a quella di una versione.&quot;"},
                    {"type": "Method", "fromName": "Update", "fromLink": "Update.html", "link": "Update.html#method_isUpdateAvailable", "name": "Update::isUpdateAvailable", "doc": "&quot;Controlla ci sono aggiornamenti da fare per il database.&quot;"},
                    {"type": "Method", "fromName": "Update", "fromLink": "Update.html", "link": "Update.html#method_isUpdateCompleted", "name": "Update::isUpdateCompleted", "doc": "&quot;Controlla se la procedura di aggiornamento \u00e8 conclusa.&quot;"},
                    {"type": "Method", "fromName": "Update", "fromLink": "Update.html", "link": "Update.html#method_isUpdateLocked", "name": "Update::isUpdateLocked", "doc": "&quot;Controlla se l&#039;aggiornamento \u00e8 in esecuzione.&quot;"},
                    {"type": "Method", "fromName": "Update", "fromLink": "Update.html", "link": "Update.html#method_getDatabaseVersion", "name": "Update::getDatabaseVersion", "doc": "&quot;Restituisce la versione corrente del software gestita dal database.&quot;"},
                    {"type": "Method", "fromName": "Update", "fromLink": "Update.html", "link": "Update.html#method_getVersion", "name": "Update::getVersion", "doc": "&quot;Restituisce la versione corrente del software gestita dal file system (file VERSION nella root).&quot;"},
                    {"type": "Method", "fromName": "Update", "fromLink": "Update.html", "link": "Update.html#method_getRevision", "name": "Update::getRevision", "doc": "&quot;Restituisce la revisione corrente del software gestita dal file system (file REVISION nella root).&quot;"},
                    {"type": "Method", "fromName": "Update", "fromLink": "Update.html", "link": "Update.html#method_getFile", "name": "Update::getFile", "doc": "&quot;Ottiene i contenuti di un file.&quot;"},
                    {"type": "Method", "fromName": "Update", "fromLink": "Update.html", "link": "Update.html#method_updateCleanup", "name": "Update::updateCleanup", "doc": "&quot;Effettua una pulizia del database a seguito del completamento dell&#039;aggiornamento.&quot;"},
                    {"type": "Method", "fromName": "Update", "fromLink": "Update.html", "link": "Update.html#method_doUpdate", "name": "Update::doUpdate", "doc": "&quot;Esegue una precisa sezione dell&#039;aggiornamento fa fare, partendo dalle query e passando poi allo script relativo.&quot;"},
                    {"type": "Method", "fromName": "Update", "fromLink": "Update.html", "link": "Update.html#method_normalizeDatabase", "name": "Update::normalizeDatabase", "doc": "&quot;Normalizza l&#039;infrastruttura del database indicato, generalizzando charset e collation all&#039;interno del database e delle tabelle ed effettuando una conversione delle tabelle all&#039;engine InnoDB.&quot;"},
                    {"type": "Method", "fromName": "Update", "fromLink": "Update.html", "link": "Update.html#method_executeScript", "name": "Update::executeScript", "doc": "&quot;Esegue uno script PHP in un&#039;ambiente il pi\u00f9 possibile protetto.&quot;"},
            
            {"type": "Class", "fromName": "Util", "fromLink": "Util.html", "link": "Util/Ini.html", "name": "Util\\Ini", "doc": "&quot;Classe dedicata alla gestione e all&#039;interpretazione dei file INI.&quot;"},
                                                        {"type": "Method", "fromName": "Util\\Ini", "fromLink": "Util/Ini.html", "link": "Util/Ini.html#method_write", "name": "Util\\Ini::write", "doc": "&quot;Predispone la struttura per il salvataggio dei contenuti INI a partire da una struttura precedente.&quot;"},
                    {"type": "Method", "fromName": "Util\\Ini", "fromLink": "Util/Ini.html", "link": "Util/Ini.html#method_read", "name": "Util\\Ini::read", "doc": "&quot;Interpreta i contentuti di una stringa in formato INI.&quot;"},
                    {"type": "Method", "fromName": "Util\\Ini", "fromLink": "Util/Ini.html", "link": "Util/Ini.html#method_readFile", "name": "Util\\Ini::readFile", "doc": "&quot;Interpreta i contenuti di un file INI.&quot;"},
                    {"type": "Method", "fromName": "Util\\Ini", "fromLink": "Util/Ini.html", "link": "Util/Ini.html#method_getList", "name": "Util\\Ini::getList", "doc": "&quot;Restituisce la lista di tutti i file INI presenti all&#039;interno della cartella indicata.&quot;"},
                    {"type": "Method", "fromName": "Util\\Ini", "fromLink": "Util/Ini.html", "link": "Util/Ini.html#method_getValue", "name": "Util\\Ini::getValue", "doc": "&quot;Ottiene il valore di un campo contenuto all&#039;interno della struttura INI.&quot;"},
                    {"type": "Method", "fromName": "Util\\Ini", "fromLink": "Util/Ini.html", "link": "Util/Ini.html#method_getFields", "name": "Util\\Ini::getFields", "doc": "&quot;Predispone il form dedicato alla modifica dei contenuti della struttura INI.&quot;"},
            
            {"type": "Class", "fromName": "Util", "fromLink": "Util.html", "link": "Util/Singleton.html", "name": "Util\\Singleton", "doc": "&quot;Classe astratta per la generazione di oggetti istanziabili una singola volta.&quot;"},
                                                        {"type": "Method", "fromName": "Util\\Singleton", "fromLink": "Util/Singleton.html", "link": "Util/Singleton.html#method___construct", "name": "Util\\Singleton::__construct", "doc": "&quot;Protected constructor to prevent creating a new instance of the &lt;b&gt;Singleton&lt;\/b&gt; via the &lt;code&gt;new&lt;\/code&gt; operator from outside of this class.&quot;"},
                    {"type": "Method", "fromName": "Util\\Singleton", "fromLink": "Util/Singleton.html", "link": "Util/Singleton.html#method_getInstance", "name": "Util\\Singleton::getInstance", "doc": "&quot;Restituisce l&#039;istanza della classe in oggetto.&quot;"},
                    {"type": "Method", "fromName": "Util\\Singleton", "fromLink": "Util/Singleton.html", "link": "Util/Singleton.html#method___clone", "name": "Util\\Singleton::__clone", "doc": "&quot;Private clone method to prevent cloning of the instance of the &lt;b&gt;Singleton&lt;\/b&gt; instance.&quot;"},
                    {"type": "Method", "fromName": "Util\\Singleton", "fromLink": "Util/Singleton.html", "link": "Util/Singleton.html#method___wakeup", "name": "Util\\Singleton::__wakeup", "doc": "&quot;Private unserialize method to prevent unserializing of the &lt;b&gt;Singleton&lt;\/b&gt; instance.&quot;"},
            
            {"type": "Class",  "link": "Widgets.html", "name": "Widgets", "doc": "&quot;Classe per la gestione dei widgets del progetto.&quot;"},
                                                        {"type": "Method", "fromName": "Widgets", "fromLink": "Widgets.html", "link": "Widgets.html#method_addModuleWidgets", "name": "Widgets::addModuleWidgets", "doc": "&quot;Prende da database tutti i widget associati al modulo passato come parametro e li aggiunge alla pagina.&quot;"},
                    {"type": "Method", "fromName": "Widgets", "fromLink": "Widgets.html", "link": "Widgets.html#method_createWidget", "name": "Widgets::createWidget", "doc": "&quot;A seconda del tipo di widget inserisce il codice HTML per la sua creazione nella pagina.&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


