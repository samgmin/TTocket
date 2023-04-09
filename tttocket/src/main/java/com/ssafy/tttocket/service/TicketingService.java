package com.ssafy.tttocket.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.redis.core.ListOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Log4j2
public class TicketingService {
    private final RedisTemplate redisTemplate;
    public Map<String,Object> addToWaitQue(String userId, int performId){
        Map<String,Object> result = new HashMap<>();

        StringBuilder sb = new StringBuilder("WaitQue::");
        String key = "WaitQue::"+performId;
        sb.append(performId);
        log.info("add key ------------------>"+ sb.toString());

        ListOperations<String, Object> listOperations = redisTemplate.opsForList();
        listOperations.rightPush(sb.toString(),userId); // 넣을때는 rightPush 뺄때는 leftPop
        Long size = listOperations.size(sb.toString());
        result.put("que_size",size);

        return result;
    }
}
