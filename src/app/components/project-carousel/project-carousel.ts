import { Component, HostListener, Input } from '@angular/core';
import { ProjectImage } from '../../models/project.model';

@Component({
  selector: 'app-project-carousel',
  imports: [],
  templateUrl: './project-carousel.html',
  styleUrl: './project-carousel.css'
})
export class ProjectCarousel {
  @Input({ required: true }) images: ProjectImage[] = [];

  currentIndex = 0;
  isZoomOpen = false;

  get currentImage(): ProjectImage | null {
    if (this.images.length === 0) {
      return null;
    }

    return this.images[this.currentIndex];
  }

  previousImage(): void {
    if (this.images.length === 0) {
      return;
    }

    this.currentIndex =
      this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
  }

  nextImage(): void {
    if (this.images.length === 0) {
      return;
    }

    this.currentIndex =
      this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1;
  }

  openZoom(): void {
    if (!this.currentImage) {
      return;
    }

    this.isZoomOpen = true;
  }

  closeZoom(): void {
    this.isZoomOpen = false;
  }

  @HostListener('document:keydown.escape')
  handleEscapeKey(): void {
    this.closeZoom();
  }
}