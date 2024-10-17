#Задание 1 - Docker CLI
1. Загрузите образ busybox последней версии
	Команада
		docker pull busybox
	Вывод 
		Using default tag: latest
		latest: Pulling from library/busybox
		a46fbb00284b: Pull complete
		Digest: sha256:768e5c6f5cb6db0794eec98dc7a967f40631746c32232b78a3105fb946f3ab83
		Status: Downloaded newer image for busybox:latest
		docker.io/library/busybox:latest

1. Запустите новый контейнер busybox с командой ping сайта netology.ru, и количеством пингов 7, поименуйте контейнер pinger
	Команада
		docker run --name pinger busybox ping -c 7 netology.ru
	Вывод 
		PING netology.ru (188.114.98.224): 56 data bytes
		64 bytes from 188.114.98.224: seq=0 ttl=63 time=54.755 ms        
		64 bytes from 188.114.98.224: seq=1 ttl=63 time=53.631 ms
		64 bytes from 188.114.98.224: seq=2 ttl=63 time=53.258 ms
		64 bytes from 188.114.98.224: seq=3 ttl=63 time=53.682 ms
		64 bytes from 188.114.98.224: seq=4 ttl=63 time=53.380 ms
		64 bytes from 188.114.98.224: seq=5 ttl=63 time=53.294 ms
		64 bytes from 188.114.98.224: seq=6 ttl=63 time=53.493 ms

		--- netology.ru ping statistics ---
		7 packets transmitted, 7 packets received, 0% packet loss        
		round-trip min/avg/max = 53.258/53.641/54.755 ms

1. Выведите на список всех контейнеров - запущенных и остановленных
	Команада
		docker ps -a
	Вывод 
		CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS                      PORTS                      NAMES
		5e124ba2dfa8   busybox   "ping -c 7 netology.…"   46 seconds ago   Exited (0) 39 seconds ago                              pinger
		201e847960e1   mongo     "docker-entrypoint.s…"   2 days ago       Up 2 days                   0.0.0.0:27017->27017/tcp   PurpleHomeworkDB
		

1. Выведите на экран логи контейнера с именем pinger
	Команада
		docker logs pinger
	Вывод 
		PING netology.ru (188.114.98.224): 56 data bytes
		64 bytes from 188.114.98.224: seq=0 ttl=63 time=54.755 ms
		64 bytes from 188.114.98.224: seq=1 ttl=63 time=53.631 ms
		64 bytes from 188.114.98.224: seq=2 ttl=63 time=53.258 ms
		64 bytes from 188.114.98.224: seq=3 ttl=63 time=53.682 ms
		64 bytes from 188.114.98.224: seq=4 ttl=63 time=53.380 ms
		64 bytes from 188.114.98.224: seq=5 ttl=63 time=53.294 ms
		64 bytes from 188.114.98.224: seq=6 ttl=63 time=53.493 ms

		--- netology.ru ping statistics ---
		7 packets transmitted, 7 packets received, 0% packet loss
		round-trip min/avg/max = 53.258/53.641/54.755 ms
		

1. Запустите второй раз контейнера с именем pinger
	Команада
		docker start pinger
	Вывод 
		pinger

1. Выведите на список всех контейнеров - запущенных и остановленных
	Команада
		docker ps -a
	Вывод 
		CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS                     PORTS                      NAMES
		5e124ba2dfa8   busybox   "ping -c 7 netology.…"   2 minutes ago   Exited (0) 9 seconds ago                              pinger
		201e847960e1   mongo     "docker-entrypoint.s…"   2 days ago      Up 2 days                  0.0.0.0:27017->27017/tcp   PurpleHomeworkDB

1. Выведите на экран логи контейнера с именем pinger
	Команада
		docker logs pinger
	Вывод 
		PING netology.ru (188.114.98.224): 56 data bytes
		64 bytes from 188.114.98.224: seq=0 ttl=63 time=54.755 ms
		64 bytes from 188.114.98.224: seq=1 ttl=63 time=53.631 ms
		64 bytes from 188.114.98.224: seq=2 ttl=63 time=53.258 ms
		64 bytes from 188.114.98.224: seq=3 ttl=63 time=53.682 ms
		64 bytes from 188.114.98.224: seq=4 ttl=63 time=53.380 ms
		64 bytes from 188.114.98.224: seq=5 ttl=63 time=53.294 ms
		64 bytes from 188.114.98.224: seq=6 ttl=63 time=53.493 ms

		--- netology.ru ping statistics ---
		7 packets transmitted, 7 packets received, 0% packet loss
		round-trip min/avg/max = 53.258/53.641/54.755 ms
		PING netology.ru (188.114.98.224): 56 data bytes
		64 bytes from 188.114.98.224: seq=0 ttl=63 time=54.369 ms
		64 bytes from 188.114.98.224: seq=1 ttl=63 time=53.702 ms
		64 bytes from 188.114.98.224: seq=2 ttl=63 time=53.627 ms
		64 bytes from 188.114.98.224: seq=3 ttl=63 time=53.453 ms
		64 bytes from 188.114.98.224: seq=4 ttl=63 time=53.480 ms
		64 bytes from 188.114.98.224: seq=5 ttl=63 time=52.805 ms
		64 bytes from 188.114.98.224: seq=6 ttl=63 time=53.641 ms

		--- netology.ru ping statistics ---
		7 packets transmitted, 7 packets received, 0% packet loss
		round-trip min/avg/max = 52.805/53.582/54.369 ms

1. Определите по логам общее количество запусков команды ping и какое общее количество отправленых запросов
	Общее количество запусков команды ping - 2
	Общее количество отправленых запросов - 14
		

1. Удалите контейнер с именем pinger
	Команада
		docker rm pinger
	Вывод 
		pinger

1. Удалите образ busybox
	Команада
		docker rmi busybox 
	Вывод 
		Untagged: busybox:latest
		Untagged: busybox@sha256:768e5c6f5cb6db0794eec98dc7a967f40631746c32232b78a3105fb946f3ab83
		Deleted: sha256:27a71e19c95622dce4d60d4a3760707495c9875f5c5322c5bd535214799593ce
		Deleted: sha256:58f32e9504c8eb248292326a1975174b0560f7a3ad1b75880b9571c4eb7144a0


##Задание 2 - Environment Variables**
Используя Docker CLI выполните следующие действия:

1. Загрузите образ node версии 15.14
	Команада
		docker pull node:15.14 
	Вывод:
	15.14: Pulling from library/node
		bfde2ec33fbc: Pull complete
		787f5e2f1047: Pull complete
		7b6173a10eb8: Pull complete
		dc05be471d51: Pull complete
		55fab5cadd3c: Pull complete
		bd821d20ef8c: Pull complete
		6041b69671c6: Pull complete
		989c5d2d2313: Pull complete
		4b57d41e8391: Pull complete
		Digest: sha256:608bba799613b1ebf754034ae008849ba51e88b23271412427b76d60ae0d0627
		Status: Downloaded newer image for node:15.14
		docker.io/library/node:15.14

		What's Next?
		View a summary of image vulnerabilities and recommendations → docker scout quickview node:15.14		

1. Запустите контейнер node в интерактивном режиме подключения терминала, поименуйте его mynode, передайте две переменные среды NAME=<ваше имя> и SURNAME=<ваша фамилия>
	Команада
		docker run -it --name mynode -e NAME=igor -e  SURNAME=vezhichanin node:15.14
	Вывод 
		Welcome to Node.js v15.14.0.
		Type ".help" for more information.
		>

1. В интерактивной среде выполнения node выполните скрипт, который выведет на экран приветсвтие: Привет, <ваше имя> <ваша фамилия>!, эти данные должны быть получены из переменных среды
	Команада
		console.log(`Привет, ${process.env.NAME} ${process.env.SURNAME}!`)
	Вывод 
		Привет, igor vezhichanin!
		undefined

1. Остановите контейнер
	Команада
		Ctrl+C, Ctrl+C
	Вывод 
		>
		(To exit, press Ctrl+C again or Ctrl+D or type .exit)
		>

1. Удалите образ node версии 15.14
	Команада
		 rm mynode
		 docker rmi node:15.14
	Вывод 
		Untagged: node:15.14
		Untagged: node@sha256:608bba799613b1ebf754034ae008849ba51e88b23271412427b76d60ae0d0627
		Deleted: sha256:3d3f41722daf1a77c34d6eade6676bbffa2d6a2a21095de2ab0c427a5c942fc9
		Deleted: sha256:601382991a159cfc5013ad973158f30b7b7a913e8d7e547b3456deab3ad98022
		Deleted: sha256:d5db49eecae8c02c9ea3a79f89c43ded9162bac118a0302a7b514d0df82aa112
		Deleted: sha256:a2c1973858d0aad3de0927294602b17c8ef9050c30e0f461e0868997a08552a4
		Deleted: sha256:a0153172017a08a521a8be971ca4dcb5fbc4b7227642c12bbb2da6265bd66b50
		Deleted: sha256:f1123940e954d335d91b52a40fab4f8144f38ff113ade7d65663071d0f06da6f
		Deleted: sha256:f1f4fbb0e7e6e0ce2d9eae1e577f9f6df0a719dd874bff00b2d08895c75c297d
		Deleted: sha256:1eb455ab6d45fdbbd90fccff791ffa228080c052acf464f8da1b1d78650bd706
		Deleted: sha256:1dbe832a694971a925d7d216f49b700c95f402bd72288f9d37eceb1d59dcf72d
		Deleted: sha256:2f4ee6a2e1b5dfb9236cd262e788f9d39109242ca27a4aacb583c8af66ec3ff7


##Задание 3 - Volumes
Используя Docker CLI выполните следующие действия:

1. Загрузите образ node версии 15.14:
	Команада
		docker pull node:15.14 
	Вывод
		15.14: Pulling from library/node
		bfde2ec33fbc: Pull complete
		787f5e2f1047: Pull complete
		7b6173a10eb8: Pull complete
		dc05be471d51: Pull complete
		55fab5cadd3c: Pull complete
		bd821d20ef8c: Pull complete
		6041b69671c6: Pull complete
		989c5d2d2313: Pull complete
		4b57d41e8391: Pull complete
		Digest: sha256:608bba799613b1ebf754034ae008849ba51e88b23271412427b76d60ae0d0627
		Status: Downloaded newer image for node:15.14
		docker.io/library/node:15.14
	
1. Запустите контейнер с именем first_node из образа node версии 15.14 в фоновом режиме, подключив папку data из текущей директории в /var/first/data контейнера
	Команада
		docker run -d --name first_node -v ./data:/var/first/data node:15.14 sleep infinity
	Вывод 
		34db1f0717a91c82ddbeee27eb50962c162bda1a453ea1a63c4760d44dd4a117

1. Запустите контейнер с именем second_node из образа node версии 15.14 в фоновом режиме, подключив папку data из текущей директории в /var/second/data контейнера
	Команада
		docker run -d --name second_node -v ./data:/var/second/data node:15.14 sleep infinity
	Вывод 
		414aaae38c4e669abc3ecc1a596f4269e9450530cec1ca3a8148d683acb04299

1. Подключитесь к контейнеру first_node с помощью exec и создайте текстовый файл любого содержания в /var/first/data
	Команада
		docker exec -it first_node /bin/bash
		root@38e73f40e020:/# touch /var/first/data/test.txt
		root@34db1f0717a9:/# cd /var/first/data/
		root@34db1f0717a9:/var/first/data# ls
	Вывод 
		

1. Добавьте еще один файл в папку data на хостовой машине
	Команада
		touch /var/first/data/test2.txt
		root@34db1f0717a9:/# cd /var/first/data/
		root@34db1f0717a9:/var/first/data# ls
	Вывод 
		test.txt  test2.txt

1. Подключитесь к контейнеру second_node с помощью exec и получите список файлов в директории /var/second/data, выведете на экран содержимое файлов
	Команада
		docker exec -it second_node /bin/bash
		root@414aaae38c4e:/# cd /var/second/data
		root@414aaae38c4e:/var/second/data# ls
	Вывод 
		test.txt  test2.txt	
	содержимое
		cat /var/second/data/test.txt
		cat /var/second/data/test2.txt		
		Пусто
		
1. Остановите оба контейнера
		docker stop first_node
		first_node

		docker stop second_node
		second_node
	

1. Удалите оба контейнера
	Команада
		docker rm first_node 
		docker rm second_node 
	Вывод 
		first_node
		second_node

1. Удалите образ node версии 15.14
	Команада
		docker rmi node:15.14
	Вывод 
		Untagged: node:15.14
		Untagged: node@sha256:608bba799613b1ebf754034ae008849ba51e88b23271412427b76d60ae0d0627
		Deleted: sha256:3d3f41722daf1a77c34d6eade6676bbffa2d6a2a21095de2ab0c427a5c942fc9
		Deleted: sha256:601382991a159cfc5013ad973158f30b7b7a913e8d7e547b3456deab3ad98022
		Deleted: sha256:d5db49eecae8c02c9ea3a79f89c43ded9162bac118a0302a7b514d0df82aa112
		Deleted: sha256:a2c1973858d0aad3de0927294602b17c8ef9050c30e0f461e0868997a08552a4
		Deleted: sha256:a0153172017a08a521a8be971ca4dcb5fbc4b7227642c12bbb2da6265bd66b50
		Deleted: sha256:f1123940e954d335d91b52a40fab4f8144f38ff113ade7d65663071d0f06da6f
		Deleted: sha256:f1f4fbb0e7e6e0ce2d9eae1e577f9f6df0a719dd874bff00b2d08895c75c297d
		Deleted: sha256:1eb455ab6d45fdbbd90fccff791ffa228080c052acf464f8da1b1d78650bd706
		Deleted: sha256:1dbe832a694971a925d7d216f49b700c95f402bd72288f9d37eceb1d59dcf72d
		Deleted: sha256:2f4ee6a2e1b5dfb9236cd262e788f9d39109242ca27a4aacb583c8af66ec3ff7