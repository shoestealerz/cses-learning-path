import sys
import io
import heapq 
INF = float("inf")
MOD = 10**9 + 7
from collections import defaultdict
 
# sys.stdin = io.StringIO("""\
# 4 10
# 4 8 5 3
# 5 12 8 1
# """)
 
input = sys.stdin.readline
 
def solve():
    n=list(map(int,input().split()))
    money=n[1]
    costs=list(map(int,input().split()))
    pages=list(map(int,input().split()))
 
    dp=[0]*(money+1)
    for i in range(len(costs)):
        cost=costs[i]
        page=pages[i]
 
        for i in range(money,cost-1,-1):
            dp[i]=max(dp[i],dp[i-cost]+page)
    print(dp[money])
 
 
def main():
    # t = int(input())
 
    # for _ in range(t):
    #     solve()
 
    solve()
 
 
main()
