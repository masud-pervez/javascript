# Redis commoned

## redis server Start

    redis-server &
    ps -ef | grep redis

## redis server inside:

    redis-cli
    set key value
    get keyname
    getrange key 0 2

## set multiple value

    mset key english node react
    mget key value

## string length

    strlen key

## rename value

    set key value

## set count and get count

    set count 2
    get count

## increment and decrement

    incr count
    decr count
    incrby count 10
    decrby count 50

## we can store float type data and increment float data

    set pi 4.3
    get pi
    incrbyfloat pi 50.333

## value expire and show

    expire key seccend
    ttl key

## redis list data type

    keys *
    flushall
    lpush/rpush and lpushx/rpushx  key bangladesh ((rpush/lpush: left and right push data)you can multiple contry name)
    lrange key 0 -1(get all data)
    llen key(get length)
    lset key 0 india(this comment by can be update data)
    linsert key before india bangladesh(this commoned by before and after insert data)
    lindex key 3
    sort mycountry desc ALPHA
    blpop key 19

## redis set data type

    sadd key value value (we can add multiple but dont add duplicate value)
    smembers key
    sismember key value(we can check value)
    diff key key (we can difference 2 key set)
    sdiffstore key old key old key (2 key defference marge then newstore create)
    sinter key key (we can check 2 store for comon value)
    sunion key key key (we can union multiple store/key)
    sunionstore newunion key key key key

## redis sorted sets data type (similer to set)

    zadd users 1 gowtam 2 rahul
    zrange users 0 -1 (we can show all data)
    zrange users 0 -1 withscrose (show all data)
    zcard users
    zcount users -inf +inf or zcount user 0 4
    zrem users gowtam (we can remove this set)
    zrevrange users 0 -1 withscores
    zscore suers value

## redis hyperloglog

    pfadd key name
    pfcount key
    pfcount key key
    pfmerge new key old key old key

## redis hashes

    hset key field value
    hkeys key (we can show all key)
    hvals myhash (we can show all value)
    hgetall myhash (we can show all key and value)
    hexists myhash name (find this name)
    hlen myhash (we can show lenght)
    hmset myhash country bangladesh phone 01983273635
    hmget myhash name phone (get this field data)
    hincrby myhash age 10 (key value increment)
    hincrbyfloat myhash age 4.4 (key value increment float value)
    hdel myhash age (delete field)
    hexists myhash age (check age field)

## redis transactions (if you use transaction start need 1 commoned)

    multi
    set name gowtamkumar
    get name
    exec
    discard()
    flushall
    exec

## redis pubsub

    subscribe news
    publish news "Hello world"
    psubscribe newchanel
    publish newchanel

## redis scripts

## connection and security (select 0 and 1 deffirent database)

    echo message
    select 0
    select 1

    <!-- #select 0 -->
    set name gowtamkumar
    <!-- check value -->
    get name
    result is gowtamkumr

    <!-- #select 1 -->
    switch database and set data and get data you can see result

    client list
    client setname thisterminal
    client getname
    client kill id 5
    config set requirepass gowtampaul30 (auth and set password)
    auth gowtampaul30(if you want to access anather terminal)

## redis Geospatial


## connection remote redis server
    redis-cli -h 127.0.01 -p 6379

## redis benchmark
    redis-benchmark -n 1000
    redis-benchmark -n 1000 -d 1000000