"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import { Slider } from "@/components/ui/slider";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Customizer() {
  const pathname = usePathname();
  const [size, setSize] = useState(2);
  const sizeOptions = ["xs", "sm", "md", "lg", "xl"];
  const [borderRadius, setBorderRadius] = useState(0);
  const borderRadiusOptions = ["none", "sm", "md", "lg", "xl"];
  const [shadow, setShadow] = useState(0);
  const shadowOptions = ["none", "sm", "md", "lg", "xl"];
  const [gradient, setGradient] = useState("none");
  const [circularShape, setCircularShape] = useState(false);

  useEffect(() => {
    window.history.replaceState(
      null,
      "",
      `${pathname}?size=${sizeOptions[size]}&borderRadius=${borderRadiusOptions[borderRadius]}&shadow=${shadowOptions[shadow]}&gradient=${gradient}`
    );
  }, [size, borderRadius, shadow, gradient, circularShape]);

  return (
    <Card className="w-full shadow-none">
      <CardHeader>
        <CardTitle>Customizer</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="grid space-y-3">
              <div className="flex flex-row items-center justify-between">
                <Label>Size</Label>
                <div className="text-sm text-muted-foreground">
                  {sizeOptions[size]}
                </div>
              </div>
              <Slider
                value={[size]}
                max={sizeOptions.length - 1}
                onValueChange={(value) => {
                  setSize(value[0]);
                }}
              />
            </div>
            <div className="grid space-y-3">
              <div className="flex flex-row items-center justify-between">
                <Label>Border Radius</Label>
                <div className="text-sm text-muted-foreground">
                  {borderRadiusOptions[borderRadius]}
                </div>
              </div>
              <Slider
                value={[borderRadius]}
                onValueChange={(value) => {
                  setBorderRadius(value[0]);
                }}
                max={borderRadiusOptions.length - 1}
              />
            </div>
            <div className="grid space-y-3">
              <div className="flex flex-row items-center justify-between">
                <Label>Shadow</Label>
                <div className="text-sm text-muted-foreground">md</div>
              </div>
              <Slider
                max={shadowOptions.length - 1}
                onValueChange={(value) => {
                  setShadow(value[0]);
                }}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="model">Gradient</Label>
              <Select onValueChange={setGradient}>
                <SelectTrigger
                  id="model"
                  className="items-start [&_[data-description]]:hidden"
                >
                  <SelectValue placeholder="None" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="top-down">
                    <p>Top-down</p>
                  </SelectItem>

                  <SelectItem value="real-linear">
                    <p>
                      Real{" "}
                      <span className="font-medium text-foreground">
                        Linear
                      </span>
                    </p>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <Switch id="circular-shape" />
              <Label htmlFor="airplane-mode">Circular shape</Label>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
