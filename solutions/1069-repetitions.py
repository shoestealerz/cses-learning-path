import sys
import io
import heapq 
INF = float("inf")
MOD = 10**9 + 7
from collections import defaultdict
 
# sys.stdin = io.StringIO("""\
# ATTCGGGA
# """)
 
input = sys.stdin.readline
 
def solve():
    # n=int(input())
    a=list(map(str,input().split()))[0]
    res=1
    prev=a[0]
    running=1
    for i in range(1,len(a)):
        curr=a[i]
        if curr==prev:
            running+=1
        else:
            running=1
        res=max(res,running)
        prev=curr
    print(res)
 
 
 
def main():
    # t = int(input())
 
    # for _ in range(t):
    #     solve()
 
    solve()
main()
