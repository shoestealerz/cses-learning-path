import sys
import io
import heapq 
from collections import defaultdict
INF = float("inf")
MOD = 10**9 + 7
 
# sys.stdin = io.StringIO("""\
# 5
# 2 3 2 2 3
# """)
 
input = sys.stdin.readline
 
def solve():
    n=int(input())
    a=list(map(int,input().split()))
 
    a.sort()
    prev=a[0]
    res=1
    for i in range(1,len(a)):
        curr=a[i]
        if curr!=prev:
            res+=1
        prev=curr
    print(res)
 
 
 
def main():
    # t = int(input())
 
    # for _ in range(t):
    #     solve()
 
    solve()
main()
