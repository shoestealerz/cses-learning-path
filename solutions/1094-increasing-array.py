import sys
import io
import heapq 
INF = float("inf")
MOD = 10**9 + 7
from collections import defaultdict
 
# sys.stdin = io.StringIO("""\
# 5
# 3 2 5 1 7
# """)
 
input = sys.stdin.readline
 
def solve():
    n=int(input())
    a=list(map(int,input().split()))
 
    prev=a[0]
    res=0
    for i in range(1,len(a)):
        if a[i]<prev:
            diff=prev-a[i]
            a[i]+=diff
            res+=diff
        prev=a[i]
    print(res)
 
 
def main():
    # t = int(input())
 
    # for _ in range(t):
    #     solve()
 
    solve()
main()
