# live-networking-board
사용자들이 서로의 한 줄 소개를 확인할 수 있는, 네트워킹 행사를 위한 프로그램

## Usage

### Settings
```
# git clone https://github.com/virus-dev/live-invest
./live-invest# npm install
```

### Run database
```
./live-invest$ mkdir db-local
./live-invest$ mongod --dbpath db-local
```
> to reset: ```$ killall -15 mongod```  

### Always Run database
```
# mongod --fork --logpath mongod.log --dbpath ./live-invest/db-local
```
> to reset:
```
# mongo
>> show dbs
>> use rst_invest
>> db.dropDatabase()
>> show dbs
```

### Run
```
./live-invest# sudo npm start
```

### Always Run
```
# forever --minUptime 5 --spinSleepTime 5 start /root/live-invest/bin/www
```
> to check: ```# forever list```  
> to stop: ```# forever stop /root/live-invest/bin/www```

## Dependencies
- nodejs
- express
- mongodb
- mongoose
- forever
