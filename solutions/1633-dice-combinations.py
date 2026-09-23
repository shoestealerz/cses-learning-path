import sys
import io
import heapq 
from collections import defaultdict
INF = float("inf")
MOD = 10**9 + 7
 
# sys.stdin = io.StringIO("""\
# 50
# """)
 
input = sys.stdin.readline
 
def solve():
    n=int(input())
    # a=list(map(int,input().split()))
 
    dp=[0]*(n+1)
    dp[1]=1
    dp[0]=1
    for i in range(2,len(dp)):
        num=0
        for j in range(1,7):
            if i-j>=0 and i-j<len(dp):
                num+=dp[i-j]
        dp[i]=num%MOD
    print(dp[n])
 
"""
3
 
1
1 1, 0 2, 2 0
1 1 1, 0 2 1, 2 0 1, 3
 
"""    
 
 
def main():
    # t = int(input())
 
    # for _ in range(t):
    #     solve()
 
    solve()
main()
