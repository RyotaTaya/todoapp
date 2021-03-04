FROM golang:1.16.0 as build

ENV GO111MODULE=on

COPY src/api /go/src/api/

WORKDIR /go/src/api/

RUN GOOS=linux GOARCH=amd64 CGO_ENABLED=0 go build -o ./main  main.go

FROM alpine:latest  
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=build /go/src/api/main /root/main
EXPOSE 3001
CMD ["./main"]