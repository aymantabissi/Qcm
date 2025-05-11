export const questions = [
    {
      question: "À quoi sert principalement le système DNS ?",
      options: [
        "A. À chiffrer les communications réseau entre clients et serveurs",
        "B. À convertir une adresse IP en nom de domaine",
        "C. À associer dynamiquement des noms de domaine à des ports réseaux",
        "D. À résoudre un nom de domaine en adresse IP utilisable par les machines"
      ],
      correct: 3
    },
    {
      question: "Le rôle d'un serveur DNS dit autoritaire est :",
      options: [
        "A. De renvoyer uniquement des réponses issues du cache",
        "B. De déléguer les requêtes à un serveur racine",
        "C. De fournir des réponses officielles et finales pour une zone précise",
        "D. De générer dynamiquement des adresses IP à la demande"
      ],
      correct: 2
    },
    {
      question: "Parmi ces propositions, laquelle caractérise le mieux une zone DNS ?",
      options: [
        "A. Une sous-partie de l'espace de noms contenant des enregistrements pour un domaine",
        "B. Une machine disposant de plusieurs adresses IP",
        "C. Un ensemble de clients DNS locale uniquement accessible en cache",
        "D. Un ensemble de serveurs DNS secondaires synchronisés entre eux"
      ],
      correct: 0
    },
    {
      question: "Quelle est la fonction du champ SOA dans une zone DNS ?",
      options: [
        "A. Indiquer le serveur DNS secondaire autoritaire",
        "B. Référencer les serveurs de messagerie acceptés",
        "C. Fournir les paramètres d'autorité de la zone, dont le serveur maître",
        "D. Indiquer la redirection vers un autre nom canonique"
      ],
      correct: 2
    },
    {
      question: "Quel type d'enregistrement permet la résolution inverse ?",
      options: [
        "A. A",
        "B. NS",
        "C. PTR",
        "D. MX"
      ],
      correct: 2
    },
    {
      question: "Que fait un enregistrement de type CNAME ?",
      options: [
        "A. Il lie un nom de domaine à une adresse IP",
        "B. Il associe un nom de domaine à un alias vers un autre nom",
        "C. Il autorise le transfert de zone entre deux serveurs DNS",
        "D. Il définit le niveau de priorité des serveurs DNS secondaires"
      ],
      correct: 1
    },
    {
      question: "Le champ TTL d'un enregistrement DNS indique :",
      options: [
        "A. Le temps de réponse maximal d'un serveur DNS",
        "B. La durée pendant laquelle une requête DNS est active",
        "C. La période de validité des données DNS en cache",
        "D. Le délai avant expiration d'un domaine dans le registre"
      ],
      correct: 2
    },
    {
      question: "Dans quel cas utilise-t-on un enregistrement de type MX ?",
      options: [
        "A. Lorsqu'un nom de domaine doit pointer vers un serveur de noms",
        "B. Pour spécifier un serveur de messagerie pour un domaine",
        "C. Pour indiquer un alias DNS",
        "D. Pour demander une redirection DNS temporaire"
      ],
      correct: 1
    },
    {
      question: "Parmi ces commandes, laquelle est utilisée pour diagnostiquer manuellement une résolution DNS ?",
      options: [
        "A. iptables",
        "B. traceroute",
        "C. nslookup",
        "D. ping"
      ],
      correct: 2
    },
    {
      question: "Que permet un transfert de zone dans un environnement DNS ?",
      options: [
        "A. De déplacer un serveur DNS d'un domaine vers un autre",
        "B. De copier tous les enregistrements d'une zone d'un serveur primaire vers un secondaire",
        "C. De supprimer les anciennes entrées DNS automatiquement",
        "D. De déléguer l'autorité d'un domaine à un client DNS"
      ],
      correct: 1
    },
    {
      question: "L'utilisateur souhaite accéder au site yahoo.fr. Que représentent les cases 1 à 5 dans la résolution DNS ?",
      options: [
        "A. Resolver/racine(.),/yahoo.fr/serveur web/.com",
        "B. Type=NS, domaine=fr/Resolver/.fr/racine(.)/type=A",
        "C. Resolver/ Type=NS, domaine=fr/racine(.)/.fr/yahoo.fr",
        "D. Resolver/Type=NS, domaine=fr/yahoo.fr/.fr"
      ],
      correct: 2
    },
    {
      question: "Les cases de 6 jusqu'à 10 portent les noms :",
      options: [
        "A. Resolver/193.48.184.201/racine(.)/.fr/yahoo.fr",
        "B. Type=NS, domaine=yahoo.fr/ Type=A, domaine=www.yahoo.fr/193.48.184.201",
        "C. Type=NS, domaine=www.yahoo.fr/193.48.184.201",
        "D. Type=A, domaine=yahoo.fr/193.48.184.201"
      ],
      correct: 1
    },
    {
      question: "Quel est le rôle principal du protocole DHCP dans un réseau ?",
      options: [
        "A. Assurer une conversion dynamique des noms DNS en adresses IP",
        "B. Affecter automatiquement une adresse MAC à chaque client",
        "C. Allouer dynamiquement des adresses IP et d'autres paramètres réseau aux clients",
        "D. Distribuer les fichiers système aux clients sans disque"
      ],
      correct: 2
    },
    {
      question: "Quelle est la séquence correcte des échanges lors de l'attribution initiale d'une adresse IP via DHCP ?",
      options: [
        "A. DHCPREQUEST → DHCPACK → DHCPDISCOVER → DHCPOFFER",
        "B. DHCPDISCOVER → DHCPREQUEST → DHCPOFFER → DHCPACK",
        "C. DHCPOFFER → DHCPDISCOVER → DHCPACK → DHCPREQUEST",
        "D. DHCPDISCOVER → DHCPOFFER → DHCPREQUEST → DHCPACK"
      ],
      correct: 3
    },
    {
      question: "Lorsqu'un client DHCP reçoit plusieurs offres, que fait-il ?",
      options: [
        "A. Il sélectionne toujours l'offre du serveur avec la plus longue durée de bail",
        "B. Il accepte la première réponse reçue et informe tous les serveurs en envoyant un DHCPACK",
        "C. Il choisit une offre et informe le serveur sélectionné via un DHCPREQUEST",
        "D. Il compare toutes les offres et attend la confirmation de tous les serveurs"
      ],
      correct: 2
    },
    {
      question: "Que signifie le terme \"bail DHCP\" ?",
      options: [
        "A. La capacité maximale du serveur à gérer des clients simultanés",
        "B. Une autorisation permanente d'utiliser une adresse IP",
        "C. Une durée pendant laquelle un client peut utiliser l'adresse IP attribuée",
        "D. Une clé secrète échangée entre le client et le serveur"
      ],
      correct: 2
    },
    {
      question: "Que se passe-t-il si le serveur ne répond pas à la première tentative de renouvellement du bail (à 50%) ?",
      options: [
        "A. Le client redémarre immédiatement la procédure complète",
        "B. Le client attend l'expiration totale du bail pour tenter de nouveau",
        "C. Le client attend le délai d'expiration et conserve l'IP en cache",
        "D. Le client retente un renouvellement à 87,5% de l'expiration du bail"
      ],
      correct: 3
    },
    {
      question: "Quelle directive permet de définir la durée maximale d'un bail dans le fichier /etc/dhcp/dhcpd.conf ?",
      options: [
        "A. lease-max-duration",
        "B. max-lease-time",
        "C. dhcp-lease-expiry",
        "D. lease-period-max"
      ],
      correct: 1
    },
    {
      question: "Dans un environnement avec plusieurs sous-réseaux séparés par des routeurs, pourquoi utilise-t-on un agent de relais DHCP ?",
      options: [
        "A. Pour stocker les baux localement sur chaque client",
        "B. Parce que le serveur DHCP ne peut pas répondre aux diffusions en dehors de son sous-réseau",
        "C. Pour crypter les échanges entre client et serveur",
        "D. Pour attribuer des IP uniquement aux clients ayant des MAC spécifiques"
      ],
      correct: 1
    },
    {
      question: "Quel fichier doit-on modifier pour spécifier les interfaces réseau concernées par le service DHCP ?",
      options: [
        "A. /etc/dhcp/interfaces.conf",
        "B. /etc/network/interfaces",
        "C. /etc/default/isc-dhcp-server",
        "D. /etc/dhcp/dhcpd.conf"
      ],
      correct: 2
    },
    {
      question: "En cas d'attribution d'adresse statique avec DHCP, quelle directive est utilisée pour fixer une IP à une adresse MAC donnée ?",
      options: [
        "A. reserved-address",
        "B. assign-ip",
        "C. static-binding",
        "D. fixed-address"
      ],
      correct: 3
    },
    {
      question: "Quel rôle joue le fichier /var/lib/dhcp/dhcpd.leases ?",
      options: [
        "A. Il contient les logs système du service DHCP",
        "B. Il enregistre les adresses IP attribuées avec les informations de bail",
        "C. Il configure les interfaces utilisées par le démon DHCP",
        "D. Il stocke les options DNS pour chaque client DHCP"
      ],
      correct: 1
    },
    {
      question: "Quel est le rôle d'un serveur Apache dans le modèle client-serveur ?",
      options: [
        "A. Convertir les requêtes HTTP en trames TCP/IP",
        "B. Répondre aux requêtes HTTP des clients en fournissant des ressources web",
        "C. Exécuter uniquement des scripts en ligne de commande",
        "D. Filtrer les connexions entrantes au niveau du pare-feu"
      ],
      correct: 1
    },
    {
      question: "Parmi les éléments suivants, lequel n'est pas obligatoire dans une URL ?",
      options: [
        "A. Le protocole (ex: http)",
        "B. Le port",
        "C. Le chemin",
        "D. Le nom de domaine"
      ],
      correct: 1
    },
    {
      question: "Le fichier apache2.conf dans Apache contient :",
      options: [
        "A. Le code source principal du serveur HTTP",
        "B. Les logs d'activité du serveur Apache",
        "C. Les directives globales de configuration, y compris les inclusions de modules",
        "D. Les fichiers HTML à servir aux clients"
      ],
      correct: 2
    },
    {
      question: "À quoi sert un bloc <VirtualHost> dans la configuration Apache ?",
      options: [
        "A. À créer un alias DNS pour un hôte distant",
        "B. À définir un site web hébergé par Apache avec une configuration spécifique",
        "C. À configurer un accès FTP",
        "D. À établir un tunnel SSH vers un sous-domaine"
      ],
      correct: 1
    },
    {
      question: "Dans un bloc <Directory>, quelle directive permet de désactiver l'accès anonyme ?",
      options: [
        "A. Options Indexes",
        "B. AllowOverride None",
        "C. Require valid-user",
        "D. DirectoryIndex index.html"
      ],
      correct: 2
    },
    {
      question: "La directive SSLCertificateKeyFile dans Apache permet de :",
      options: [
        "A. Spécifier l'algorithme de chiffrement SSL",
        "B. Générer un nouveau certificat pour le serveur",
        "C. Indiquer le chemin vers la clé privée utilisée par le serveur SSL",
        "D. Identifier les utilisateurs autorisés à utiliser le site en HTTPS"
      ],
      correct: 2
    },
    {
      question: "Quel est le rôle du fichier /var/log/apache2/access_log ?",
      options: [
        "A. Enregistrer les erreurs rencontrées par le démon Apache",
        "B. Lister les fichiers exécutés par les scripts PHP",
        "C. Consigner toutes les requêtes client reçues par le serveur",
        "D. Stocker les mots de passe des utilisateurs authentifiés"
      ],
      correct: 2
    },
    {
      question: "Quel est le rôle principal du protocole SNMP ?",
      options: [
        "A. Transférer des fichiers entre des machines Linux",
        "B. Superviser et gérer les équipements réseau à distance",
        "C. Crypter les communications entre serveurs Windows",
        "D. Générer des adresses IP dynamiques pour les clients"
      ],
      correct: 1
    },
    {
      question: "Dans l'architecture SNMP, le rôle de l'agent est :",
      options: [
        "A. Gérer les bases de données MIB distantes",
        "B. Fournir des données sur un équipement au gestionnaire SNMP",
        "C. Transférer les paquets entre serveurs et commutateurs",
        "D. Créer des ports virtuels pour l'écoute sur UDP"
      ],
      correct: 1
    },
    {
      question: "Le fichier qui contient les informations de configuration d'un serveur Samba est :",
      options: [
        "A. /etc/network/interfaces",
        "B. /etc/hosts",
        "C. /etc/samba/smb.conf",
        "D. /var/log/smbclient"
      ],
      correct: 2
    },
    {
      question: "Quel port est utilisé par défaut pour le protocole SNMP au niveau de la commande Trap?",
      options: [
        "A. TCP 162",
        "B. UDP 161",
        "C. TCP 161",
        "D. UDP 162"
      ],
      correct: 3
    },
    {
      question: "Quelle commande permet de tester un partage Samba à partir d'un client ?",
      options: [
        "A. testparm",
        "B. smbclient //serveur",
        "C. ping smb",
        "D. sharetest samba"
      ],
      correct: 1
    },
    {
      question: "Le protocole CMIP est principalement utilisé pour :",
      options: [
        "A. Partager des fichiers entre serveurs Windows",
        "B. Assurer le routage inter-VLAN",
        "C. Gérer les ressources réseau dans un environnement OSI",
        "D. Lancer des connexions SSH dans un réseau sécurisé"
      ],
      correct: 2
    },
    {
      question: "Dans CMIP, la base d'information des objets gérés est appelée :",
      options: [
        "A. MIB-II",
        "B. BDD-RPC",
        "C. GDMO (Guidelines for the Definition of Managed Objects)",
        "D. OID-table"
      ],
      correct: 2
    },
    {
      question: "Quel port est généralement associé à CMIP ?",
      options: [
        "A. UDP 163",
        "B. TCP 102",
        "C. UDP 514",
        "D. TCP 164"
      ],
      correct: 0
    },
    {
      question: "Dans SNMP, une \"trap\" est :",
      options: [
        "A. Une tentative d'intrusion détectée par le pare-feu",
        "B. Une alerte envoyée par un agent vers le gestionnaire sans requête préalable",
        "C. Une commande de transfert de fichier entre MIBs",
        "D. Un port de communication sécurisé pour SNMPv3"
      ],
      correct: 1
    },
    {
      question: "Quelle différence majeure existe entre SNMP et CMIP ?",
      options: [
        "A. SNMP utilise HTTP, CMIP utilise TCP",
        "B. SNMP est plus léger et moins complet que CMIP",
        "C. SNMP ne permet pas l'envoi de commandes de configuration",
        "D. CMIP ne peut pas être utilisé en environnement OSI"
      ],
      correct: 1
    },
    {
      question: "Quelle directive Samba permet de spécifier le groupe de travail Windows auquel appartient le serveur ?",
      options: [
        "A. workdir",
        "B. workgroup",
        "C. group-id",
        "D. netbios-name"
      ],
      correct: 1
    },
    {
      question: "Quel est l’objectif principal d’une attaque DHCP spoofing ?",
      options: [
       " A. Accélérer la distribution d’adresses IP",
        " B. Fournir une redondance au réseau",
        " C. Usurper un serveur DHCP légitime pour contrôler ou espionner le trafic réseau",
         " D. Bloquer l’accès à Internet pour tous les utilisateurs"
      ],
      correct: 2
    },
    {
      question: "Dans une attaque DHCP spoofing, que fournit généralement le faux serveur DHCP ?",
      options: [
       "  A. Une adresse IP non valide uniquement",
        " B.Une configuration réseau complète, souvent malveillante",
        " C.Un antivirus à installer",
         " D. Une mise à jour du système d’exploitation"
      ],
      correct: 1
    },
    {
      question: "Quel est le rôle du mécanisme DHCP snooping ?",
      options: [
       "  A. Accélérer la réponse DHCP",
        " B.Empêcher les clients de recevoir des réponses DHCP",
        " C.Bloquer les serveurs DHCP non autorisés",
         " D. Attribuer automatiquement les DNS"
      ],
      correct: 2
    },
    {
      question: "Quelle technique est souvent utilisée avec DHCP spoofing pour intercepter les communications ?",
      options: [
       "  A.  SQL Injection",
        "  B. Man-in-the-Middle ",
        " C. Phishing",
         "  D. Brute Force"
      ],
      correct: 1
    },
  ];