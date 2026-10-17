
    processor 6502
    include "vcs.h"
    include "macro.h"
    include "xmacro.h"

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

    seg.u Variables
    org $80

    seg Code
    org $f000

Start
    CLEAN_START

NextFrame
    VERTICAL_SYNC

    TIMER_SETUP 37
; Set playfield foreground and background
    lda #$F6
    sta COLUBK
    lda #$F7
    sta COLUPF
    TIMER_WAIT

    ldy #192
ScanLoop
; WSYNC and store playfield registers
    lda PFBitmap0,y
    ldx PFBitmap1,y
    sta WSYNC
    sta PF0		; store first playfield byte
    lda PFColorFg,y
    sta COLUPF
    lda PFColorBg,y
    sta COLUBK
    stx PF1		; store 2nd byte
    lda PFBitmap2,y
    sta PF2		; store 3rd byte
    lda PFBitmap3,y
    sta PF0		; store 4th byte (cyc 28-49)
    nop
    lda PFBitmap4,y
    sta PF1		; store 5th byte (cyc 39-54)
    nop
    lda PFBitmap5,y
    sta PF2		; store 6th byte (cyc 49-65)
    dey 
    bne ScanLoop	; repeat until all scanlines drawn
; Reset playfield
    lda #0
    sta PF0
    sta PF1
    sta PF2		; clear playfield

    TIMER_SETUP 28
    TIMER_WAIT
    jmp NextFrame

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; BITMAP DATA

PFBitmap0 equ .+192*0-1
PFBitmap1 equ .+192*1-1
PFBitmap2 equ .+192*2-1
PFBitmap3 equ .+192*3-1
PFBitmap4 equ .+192*4-1
PFBitmap5 equ .+192*5-1
PFColorBg equ .+192*6-1
PFColorFg equ .+192*7-1
    incbin "$DATAFILE"

; Epilogue
    org $fffc
    .word Start
    .word Start
